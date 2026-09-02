import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

interface ContactPayload {
  name: string;
  title: string;
  organization: string;
  email: string;
  inquiry?: string;
  description?: string;
  contactMethod?: string;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as ContactPayload;

    // Basic validation
    if (!body?.name || !body?.email || !body?.organization) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(body.email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const TO = "contact@palatineadvisory.com";
    const FROM = "Palatine Advisory <contact@palatineadvisory.com>";

    const html = `
      <h2>New inquiry from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Title:</strong> ${escapeHtml(body.title)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(body.organization)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>Nature of inquiry:</strong> ${escapeHtml(body.inquiry ?? "—")}</p>
      <p><strong>Preferred form of contact:</strong> ${escapeHtml(body.contactMethod ?? "—")}</p>
      <p><strong>Description:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(body.description ?? "—")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: body.email,
        subject: `New inquiry, ${body.name} (${body.organization})`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error", res.status, data);
      return new Response(JSON.stringify({ error: data?.message ?? "Resend error", details: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email failed", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

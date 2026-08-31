import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'otcg_cookie_consent_v1';
const EVENT_NAME = 'otcg:cookie-consent-reset';

type Consent = 'accepted' | 'rejected' | 'custom';
type Preferences = { necessary: true; analytics: boolean };

export const resetCookieConsent = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT_NAME));
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const existing = localStorage.getItem(STORAGE_KEY);
        if (!existing) {
          setOpen(true);
          setShowSettings(false);
        } else {
          setOpen(false);
        }
      } catch {
        setOpen(true);
      }
    };
    check();
    window.addEventListener(EVENT_NAME, check);
    return () => window.removeEventListener(EVENT_NAME, check);
  }, []);

  const persist = (status: Consent, prefs: Preferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status, prefs, ts: new Date().toISOString() })
      );
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  const acceptAll = () => persist('accepted', { necessary: true, analytics: true });
  const rejectAll = () => persist('rejected', { necessary: true, analytics: false });
  const saveCustom = () => persist('custom', { necessary: true, analytics });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[460px] z-[100] bg-paper border border-ink/85 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
            § Cookie notice
          </p>
          <button
            onClick={rejectAll}
            aria-label="Decline non-essential cookies and close"
            className="text-ink/55 hover:text-ink transition-colors -mt-1 -mr-1"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <h2 className="font-serif text-[1.4rem] lg:text-[1.55rem] text-ink leading-tight tracking-[-0.01em] mb-3">
          A note on cookies.
        </h2>
        <p className="text-[14.5px] text-ink/80 leading-relaxed mb-5">
          We use strictly necessary cookies so the site works as intended. With
          your consent, we also use anonymous analytics to understand how the
          site is read. No advertising. No profiling.{' '}
          <Link to="/cookies" className="underline underline-offset-2 hover:text-ink">
            Read the full notice
          </Link>
          .
        </p>

        {showSettings && (
          <div className="border border-ink/20 bg-buttercream/40 p-4 mb-5 space-y-3">
            <PrefRow
              label="Strictly necessary"
              description="Required. Cannot be disabled."
              disabled
              checked
            />
            <PrefRow
              label="Analytics"
              description="Anonymous, aggregate usage statistics."
              checked={analytics}
              onChange={setAnalytics}
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={acceptAll}
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 hover:bg-mustard hover:text-ink transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Accept all</span>
          </button>
          <button
            onClick={rejectAll}
            className="inline-flex items-center gap-2 border border-ink/40 text-ink px-5 py-2.5 hover:bg-buttercream/50 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Reject non-essential</span>
          </button>
          {showSettings ? (
            <button
              onClick={saveCustom}
              className="inline-flex items-center gap-2 border border-ink/40 text-ink px-5 py-2.5 hover:bg-buttercream/50 transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Save preferences</span>
            </button>
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              className="inline-flex items-center text-ink/65 hover:text-ink underline underline-offset-2 px-2 py-2.5 text-[12px]"
            >
              Customise
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PrefRow = ({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) => (
  <label className={`flex items-start gap-3 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}>
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      className="mt-1 accent-ink"
    />
    <span className="block">
      <span className="block text-[13.5px] text-ink font-medium">{label}</span>
      <span className="block text-[12.5px] text-ink/65">{description}</span>
    </span>
  </label>
);

export default CookieConsent;

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Plus } from 'lucide-react';
import logo from '@/assets/logo-mark.png';

type SubItem = { label: string; to: string };
type NavItem = { label: string; to: string; submenu?: SubItem[] };

const practiceSubmenu: SubItem[] = [
  { label: 'All practice areas', to: '/practice' },
  { label: 'Decision habits', to: '/practice/decision-habits' },
  { label: 'Responsibility and handoffs', to: '/practice/responsibility' },
  { label: 'Leadership meeting rhythm', to: '/practice/meetings' },
];

const industriesSubmenu: SubItem[] = [
  { label: 'Where this work fits', to: '/industries' },
];

const navLinks: NavItem[] = [
  { label: 'Practice', to: '/practice', submenu: practiceSubmenu },
  { label: 'Industries', to: '/industries', submenu: industriesSubmenu },
  { label: 'Approach', to: '/approach' },
  { label: 'Insights', to: '/insights' },
  { label: 'Firm', to: '/about' },
];

export const Navigation = () => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const goContact = () => navigate('/contact');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement banner */}
      {bannerOpen && (
        <div className="bg-lavender/90 backdrop-blur-md border-b border-ink/85">
          <div className="flex items-center min-h-[44px]">
            <div className="hidden lg:block w-[112px] flex-shrink-0 border-r border-ink/85 self-stretch" />
            <div className="flex-1 px-5 lg:px-8 py-2.5 text-sm text-ink">
              <span className="font-semibold">A note before writing.</span>{' '}
              <Link to="/contact" className="underline underline-offset-2 hover:text-ink/70">
                A short description of the recurring issue is the most useful place to begin
              </Link>
              .
            </div>
            <button
              onClick={() => setBannerOpen(false)}
              aria-label="Dismiss"
              className="px-4 lg:px-5 py-3 text-ink hover:text-ink/60 border-l border-ink/85 self-stretch flex items-center"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}

      {/* Main nav row */}
      <div className="border-b border-ink/85 bg-paper/80 backdrop-blur-md">
        <div className="flex items-stretch min-h-[68px] lg:min-h-[76px]">
          <Link
            to="/"
            className="flex items-center justify-center w-[88px] lg:w-[112px] flex-shrink-0 border-r border-ink/85 bg-mustard/70 hover:bg-mustard-deep transition-colors"
            aria-label="Olive Tree Consulting Group, home"
          >
            <img
              src={logo}
              alt="Olive Tree Consulting Group"
              className="h-11 w-11 lg:h-14 lg:w-14 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden lg:flex items-stretch flex-1 px-8"
            onMouseLeave={() => setOpenMenu(null)}
          >
            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative flex items-center"
                onMouseEnter={() => setOpenMenu(link.submenu ? link.label : null)}
              >
                <Link
                  to={link.to}
                  className="font-serif text-[17px] text-ink hover:text-ink/60 transition-colors inline-flex items-center gap-1.5 px-4 h-full"
                >
                  {link.label}
                  {link.submenu && <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />}
                </Link>
                {link.submenu && openMenu === link.label && (
                  <div className="absolute top-full left-0 min-w-[260px] bg-paper border border-ink/85 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.25)] py-2 z-50">
                    {link.submenu.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-5 py-2.5 font-serif text-[15px] text-ink hover:bg-buttercream/60"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile wordmark */}
          <div className="lg:hidden flex-1 flex items-center px-5">
            <Link to="/" className="font-serif text-base text-ink leading-tight">
              Olive Tree<br />
              <span className="text-ink/60 text-sm">Consulting Group</span>
            </Link>
          </div>

          <button
            aria-label="Search"
            className="hidden lg:flex items-center justify-center w-16 border-l border-ink/85 hover:bg-buttercream/60 transition-colors"
          >
            <Search className="h-5 w-5 text-ink" strokeWidth={1.5} />
          </button>

          <button
            onClick={goContact}
            className="hidden lg:flex items-center justify-center px-10 bg-brass border-l border-ink/85 hover:bg-brass-deep transition-colors group"
          >
            <span className="font-serif text-[17px] text-paper mr-3">Contact</span>
            <span className="w-1.5 h-1.5 rounded-full bg-paper group-hover:scale-150 transition-transform" />
          </button>

          <button
            className="lg:hidden flex items-center justify-center w-16 border-l border-ink/85 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu — full-screen, fully opaque drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-ink/85 bg-paper h-[calc(100dvh-68px)] overflow-y-auto flex flex-col">
            <div className="flex flex-col flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-6 py-6 text-left font-serif text-3xl text-ink border-b border-ink/15 hover:bg-mustard/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="px-6 py-6 text-left font-serif text-3xl text-paper bg-brass mt-auto"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation-header"
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      <div className="w-full max-w-5xl pointer-events-auto flex flex-col items-center">
        {/* Floating Capsule Bar */}
        <motion.div
          layout
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0e0e11]/92 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
              : 'bg-[#121214]/85 backdrop-blur-lg border-[#27272a]/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Brand Pill */}
          <a
            id="nav-brand-link"
            href="#hero"
            className="group flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#18181b]/80 hover:bg-[#202024] border border-white/5 hover:border-white/15 transition-all cursor-pointer shrink-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-bold tracking-tight text-[#fafafa] group-hover:text-white transition-colors">
                M. DANISH
              </span>
              <span className="font-mono text-[10px] text-[#71717a] uppercase">
                PMO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on large screens 1024px+) */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#09090b]/60 p-1 rounded-full border border-white/5"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors duration-200 z-10 ${
                    isActive ? 'text-[#fafafa]' : 'text-[#a1a1aa] hover:text-[#fafafa]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15 -z-10 backdrop-blur-sm"
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Curved Action Buttons (1024px+) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              id="nav-resume-button"
              type="button"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-wider text-[#fafafa] hover:text-white bg-[#18181b]/80 hover:bg-[#222226] border border-white/10 hover:border-white/25 rounded-full transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#a1a1aa]" />
              <span>RESUME</span>
            </button>

            <a
              id="nav-contact-cta"
              href="#contact"
              className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#09090b] bg-[#fafafa] hover:bg-white border border-white rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile & Tablet Quick Actions & Drawer Toggle (<1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-resume-trigger"
              type="button"
              onClick={onOpenResume}
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono text-[#fafafa] bg-[#18181b] hover:bg-[#222226] border border-white/10 rounded-full cursor-pointer min-h-[36px]"
              aria-label="View Resume"
            >
              <FileText className="w-3 h-3 text-[#a1a1aa]" />
              <span>RESUME</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#a1a1aa] hover:text-[#fafafa] bg-[#18181b] hover:bg-[#222226] border border-white/10 rounded-full focus:outline-none focus:ring-1 focus:ring-white transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile & Tablet Floating Curved Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="w-full mt-2.5 p-4 sm:p-5 bg-[#121214]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl flex flex-col gap-3.5 z-50 overflow-hidden"
            >
              {/* Tablet displays 3 columns, mobile displays 2 columns */}
              <nav aria-label="Mobile Navigation" className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      id={`mobile-nav-link-${link.id}`}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-2xl border transition-all text-xs font-medium min-h-[44px] ${
                        isActive
                          ? 'bg-white/10 border-white/20 text-white font-semibold'
                          : 'bg-[#09090b]/70 border-white/5 text-[#a1a1aa] hover:text-white hover:bg-[#18181b]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-[10px] text-[#71717a]">0{idx + 1}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <a
                  id="mobile-menu-contact-btn"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 text-center text-xs font-semibold tracking-wider text-[#09090b] bg-[#fafafa] hover:bg-white rounded-full shadow-sm min-h-[44px] flex items-center justify-center gap-1"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  id="mobile-menu-resume-btn"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-3 text-center text-xs font-mono tracking-wider text-[#fafafa] bg-[#18181b] hover:bg-[#222226] border border-white/10 rounded-full min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#a1a1aa]" />
                  <span>VIEW FULL RESUME</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

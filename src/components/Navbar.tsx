import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services', sub: ['Gestion Locative', 'Mise en Location', 'Suivi Administratif', 'Assistance Juridique'] },
  { label: 'Processus', href: '#processus' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00B4D8"/>
                      <stop offset="100%" stopColor="#4A148C"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="12" cy="26" rx="8" ry="12" fill="url(#logoGrad)" opacity="0.9"/>
                  <ellipse cx="21" cy="20" rx="7" ry="11" fill="#00B4D8" opacity="0.85"/>
                  <ellipse cx="30" cy="26" rx="6" ry="10" fill="#4A148C" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <div className={`font-black text-xl tracking-tight leading-none ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  LOCAGESTION
                </div>
                <div className={`text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5 ${scrolled ? 'text-cyan-500' : 'text-cyan-300'}`}>
                  LA SOLUTION GESTION
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {link.sub && <ChevronDown size={14} className="mt-0.5" />}
                  </a>
                  {link.sub && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                    >
                      {link.sub.map((s) => (
                        <a
                          key={s}
                          href="#services"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                        >
                          {s}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+33XXXXXXXXX"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-cyan-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone size={15} />
                <span>Être rappelé</span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                Audit gratuit
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="font-black text-lg text-gray-900">LOCAGESTION</div>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <X size={22} className="text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-3.5 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="p-5 border-t border-gray-100 space-y-3">
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-cyan-300 hover:text-cyan-600 transition-colors"
              >
                <Phone size={16} />
                Être rappelé
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold"
              >
                Audit gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

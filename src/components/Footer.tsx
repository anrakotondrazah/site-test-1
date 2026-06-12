import { Phone, Mail, MapPin, ArrowRight, Shield } from 'lucide-react';

const footerLinks = {
  Services: [
    'Gestion Locative',
    'Mise en Location',
    'Suivi Administratif',
    'Assistance Juridique',
    'Encaissement des Loyers',
    'Gestion des Sinistres',
  ],
  Propriétaires: [
    'Espace propriétaire',
    'Estimer mon loyer',
    'Simulation rentabilité',
    'Audit gratuit',
    'Témoignages clients',
    'Blog & Conseils',
  ],
  Légal: [
    'Mentions légales',
    'Politique de confidentialité',
    'CGU / CGV',
    'RGPD',
    'Cookies',
    'Plan du site',
  ],
};

const socials = [
  { label: 'Facebook', char: 'f' },
  { label: 'LinkedIn', char: 'in' },
  { label: 'Instagram', char: '◈' },
  { label: 'X / Twitter', char: 'X' },
  { label: 'YouTube', char: '▶' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Pre-footer CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 py-12 px-4">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
              Prêt à déléguer votre gestion locative ?
            </h3>
            <p className="text-white/80 text-base">
              Premier audit gratuit · Expert dédié · Réponse sous 2h
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-sm"
            >
              Audit gratuit
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+33XXXXXXXXX"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Phone size={16} />
              Être rappelé
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00B4D8"/>
                    <stop offset="100%" stopColor="#4A148C"/>
                  </linearGradient>
                </defs>
                <ellipse cx="12" cy="26" rx="8" ry="12" fill="url(#footerLogoGrad)" opacity="0.9"/>
                <ellipse cx="21" cy="20" rx="7" ry="11" fill="#00B4D8" opacity="0.85"/>
                <ellipse cx="30" cy="26" rx="6" ry="10" fill="#4A148C" opacity="0.8"/>
              </svg>
              <div>
                <div className="font-black text-lg text-white">LOCAGESTION</div>
                <div className="text-[9px] font-semibold tracking-[0.2em] text-cyan-400 uppercase">LA SOLUTION GESTION</div>
              </div>
            </a>
            
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Expert en gestion locative depuis 2009. Nous accompagnons les propriétaires bailleurs 
              dans la gestion et l'optimisation de leur patrimoine immobilier.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-white/50 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                <Phone size={14} className="flex-shrink-0" />
                +33 (0)1 XX XX XX XX
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                <Mail size={14} className="flex-shrink-0" />
                contact@locagestion.com
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                <MapPin size={14} className="flex-shrink-0" />
                Paris · Lyon · Bordeaux
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all duration-200 hover:scale-110 text-white/60 hover:text-white font-bold text-xs"
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 text-sm hover:text-cyan-400 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 LOCAGESTION · Tous droits réservés · SIRET: XXX XXX XXX XXXXX
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {['Mentions légales', 'Confidentialité', 'CGU', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/70 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <Shield size={13} className="text-green-400" />
            <span className="text-white/40 text-xs">Site sécurisé & RGPD conforme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

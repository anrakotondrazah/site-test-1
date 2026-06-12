import { motion } from 'framer-motion';

const partners = [
  { name: 'SeLoger', logo: 'SeLoger' },
  { name: 'Leboncoin', logo: 'leboncoin' },
  { name: 'PAP', logo: 'PAP.fr' },
  { name: 'Logic-Immo', logo: 'Logic-Immo' },
  { name: 'FNAIM', logo: 'FNAIM' },
  { name: 'Orpi', logo: 'ORPI' },
  { name: 'Groupama', logo: 'Groupama' },
  { name: 'Credit Agricole', logo: 'Crédit Agricole' },
];

export default function PartnersBand() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-7">
          Nos partenaires & portails de diffusion
        </p>
        {/* Marquee effect */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-8 items-center flex-shrink-0"
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-5 py-3 flex items-center justify-center min-w-[120px] hover:border-cyan-300 hover:shadow-md transition-all duration-200 group"
                >
                  <span className="font-bold text-gray-400 text-sm group-hover:text-cyan-600 transition-colors whitespace-nowrap">
                    {p.logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

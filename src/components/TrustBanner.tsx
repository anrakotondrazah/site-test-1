import { motion } from 'framer-motion';
import { Shield, Zap, Eye, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Loyers Sécurisés',
    desc: 'Garantie Loyers Impayés (GLI) incluse dans toutes nos formules premium.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: Eye,
    title: 'Transparence Totale',
    desc: 'Chaque euro tracé. Accès temps réel à votre espace propriétaire dédié.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: Zap,
    title: 'Réactivité 24/7',
    desc: 'Urgences locatives gérées immédiatement. Réseau d\'artisans disponibles.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement Humain',
    desc: 'Un expert dédié vous accompagne tout au long de votre expérience.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
];

export default function TrustBanner() {
  return (
    <section className="bg-white border-y border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8"
        >
          Nos engagements — Inspirés des meilleures pratiques du secteur
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${p.bg} ${p.border} border rounded-2xl p-5 group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mb-3 shadow-sm`}>
                <p.icon size={20} className={p.color} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

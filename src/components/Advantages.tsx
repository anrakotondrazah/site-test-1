import { motion } from 'framer-motion';
import { Check, X, TrendingUp, Clock, Shield, Smile, FileText, Zap } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Gain de temps',
    withUs: 'Zéro démarche · Gestion totale déléguée · Plus de stress',
    without: 'Appels incessants · Gestion administrative lourde · Nuits sans sommeil',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Sécurité totale',
    withUs: 'GLI incluse · Loyers garantis · Locataires vérifiés',
    without: 'Risque impayés · Aucune protection · Démarches juridiques seul',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: TrendingUp,
    title: 'Rentabilité maximale',
    withUs: '+23% de rendement moyen · Loyers optimisés · Fiscalité maîtrisée',
    without: 'Loyers sous-évalués · Fiscalité non optimisée · ROI sous-exploité',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Smile,
    title: 'Sérénité absolue',
    withUs: 'Expert dédié · Disponible 7j/7 · Reporting clair et régulier',
    without: 'Gestion seule · Urgences non gérées · Manque de visibilité',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: FileText,
    title: 'Conformité légale',
    withUs: 'Bail conforme · Veille juridique · Mises à jour automatiques',
    without: 'Risque de litiges · Méconnaissance des lois · Non-conformité',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Zap,
    title: 'Réactivité',
    withUs: 'Réponse en 2h · Sinistres gérés immédiatement · Artisans réseau',
    without: 'Délais interminables · Gestion des urgences seul · Réseau limité',
    color: 'from-pink-500 to-rose-600',
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            POURQUOI LOCAGESTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            La différence qui change{' '}
            <span className="gradient-text">tout.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comparez objectivement ce que cela change de déléguer votre gestion locative 
            à des professionnels.
          </p>
        </motion.div>

        {/* Comparison table header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-4 px-4"
        >
          <div /> {/* empty left */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 text-center shadow-xl shadow-cyan-500/20">
            <div className="text-white font-black text-lg">✦ LOCAGESTION</div>
            <div className="text-cyan-100 text-xs font-medium mt-1">La gestion experte</div>
          </div>
          <div className="bg-gray-200 rounded-2xl p-4 text-center">
            <div className="text-gray-600 font-black text-lg">Gestion perso</div>
            <div className="text-gray-400 text-xs font-medium mt-1">Faire seul</div>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-3 gap-4 items-stretch"
            >
              {/* Label */}
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border border-gray-100">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${adv.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <adv.icon size={16} className="text-white" />
                </div>
                <span className="font-bold text-gray-900 text-sm">{adv.title}</span>
              </div>

              {/* With Locagestion */}
              <div className="relative bg-white border border-cyan-200 rounded-2xl px-4 py-4 shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-snug">{adv.withUs}</p>
                </div>
              </div>

              {/* Without */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={11} className="text-red-500" />
                  </div>
                  <p className="text-gray-400 text-sm leading-snug">{adv.without}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile comparison (alternate layout) */}
        <div className="lg:hidden mt-4">
          {/* Already handled above in grid */}
        </div>

        {/* Bottom guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-black text-gray-900 mb-1">Notre garantie propriétaire</h3>
              <p className="text-gray-500 text-sm">Satisfait ou remboursé pendant 30 jours. Aucun risque.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Loyers garantis', 'Zéro engagement', 'Expert dédié', 'Reporting mensuel', 'Assurance incluse'].map((g) => (
                <span key={g} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 font-semibold text-sm px-3 py-1.5 rounded-full border border-green-100">
                  <Check size={13} />
                  {g}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform duration-200"
            >
              Commencer maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

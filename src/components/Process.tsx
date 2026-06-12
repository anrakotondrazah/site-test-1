import { motion } from 'framer-motion';
import { MessageCircle, Search, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Prise de contact',
    subtitle: 'Sous 24h',
    description: 'Échangez avec un expert Locagestion. Nous analysons votre situation, votre bien et vos objectifs de rentabilité. Gratuit et sans engagement.',
    details: ['Appel de découverte offert', 'Analyse de votre patrimoine', 'Première estimation immédiate'],
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(0, 180, 216, 0.2)',
  },
  {
    num: '02',
    icon: Search,
    title: 'Analyse du bien',
    subtitle: '48 à 72h',
    description: 'Notre équipe réalise un audit complet de votre bien : état, loyer de marché, potentiel de valorisation, conformité légale.',
    details: ['Audit complet du bien', 'Estimation loyer de marché', 'Rapport de conformité'],
    color: 'from-purple-500 to-violet-600',
    glowColor: 'rgba(74, 20, 140, 0.2)',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Mise en place',
    subtitle: 'En 1 semaine',
    description: 'Signature du mandat, mise en ligne des annonces, sélection des candidats, rédaction du bail et remise des clés. Tout est géré.',
    details: ['Mandat de gestion signé', 'Annonces multi-portails', 'Sélection & bail électronique'],
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59, 130, 246, 0.2)',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Gestion quotidienne',
    subtitle: 'Dès J+1',
    description: 'Vous recevez vos loyers chaque mois. Notre équipe gère tout, 365 jours par an. Vous suivez tout depuis votre espace propriétaire.',
    details: ['Loyers reversés chaque mois', 'Espace propriétaire 24/7', 'Reporting mensuel détaillé'],
    color: 'from-green-500 to-emerald-600',
    glowColor: 'rgba(34, 197, 94, 0.2)',
  },
];

export default function Process() {
  return (
    <section id="processus" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            NOTRE PROCESSUS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Déléguer en{' '}
            <span className="gradient-text">4 étapes simples.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            De la première conversation à la gestion quotidienne, nous vous accompagnons à chaque étape 
            avec transparence et expertise.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-8">
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 via-blue-500 to-green-500 opacity-30" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 via-blue-500 to-green-500 origin-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                      style={{ boxShadow: `0 20px 40px ${step.glowColor}` }}
                    >
                      <step.icon size={36} className="text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-md">
                      <span className="text-xs font-black text-gray-600">{step.num}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {step.subtitle}
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-gray-600 justify-center">
                        <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Left icon + line */}
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon size={24} className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-gray-300 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400 font-bold">{step.num}</span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{step.subtitle}</span>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.description}</p>
                <ul className="space-y-1.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 overflow-hidden text-center"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
          
          <div className="relative">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Prêt à déléguer votre gestion locative ?
            </h3>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Commencez dès aujourd'hui. Premier entretien gratuit, sans engagement, avec un expert dédié.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 text-base"
            >
              Démarrer maintenant — C'est gratuit
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

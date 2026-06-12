import { motion } from 'framer-motion';
import { ArrowRight, Home, FileSearch, FileText, Scale, CreditCard, AlertTriangle, Key, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Gestion Locative',
    description: 'Prise en charge complète de votre patrimoine immobilier : relation locataire, états des lieux, suivi quotidien.',
    features: ['Relation locataire 24/7', 'États des lieux digitaux', 'Suivi patrimoine'],
    color: 'from-cyan-500 to-blue-600',
    accent: '#00B4D8',
    badge: 'Populaire',
  },
  {
    icon: Key,
    title: 'Mise en Location',
    description: 'Commercialisation rapide et sélection rigoureuse du meilleur profil locataire pour maximiser votre taux d\'occupation.',
    features: ['Diffusion multi-portails', 'Sélection locataires', 'Signature électronique'],
    color: 'from-purple-500 to-purple-700',
    accent: '#4A148C',
    badge: null,
  },
  {
    icon: FileText,
    title: 'Suivi Administratif',
    description: 'Gestion de toute la paperasse : quittances, régularisations, relances, déclarations fiscales simplifiées.',
    features: ['Quittances automatiques', 'Régularisation charges', 'Espace propriétaire'],
    color: 'from-blue-500 to-indigo-600',
    accent: '#3B82F6',
    badge: null,
  },
  {
    icon: Scale,
    title: 'Assistance Juridique',
    description: 'Conseils et accompagnement en cas de litige, de contentieux ou de mise en conformité réglementaire.',
    features: ['Veille juridique', 'Gestion contentieux', 'Mise en conformité'],
    color: 'from-violet-500 to-purple-700',
    accent: '#7C3AED',
    badge: null,
  },
  {
    icon: CreditCard,
    title: 'Encaissement des Loyers',
    description: 'Reversement garantit et ponctuel chaque mois. Suivi en temps réel des flux financiers sur votre espace dédié.',
    features: ['Reversement mensuel', 'Rapport financier', 'Traçabilité complète'],
    color: 'from-green-500 to-emerald-600',
    accent: '#22C55E',
    badge: 'Garanti',
  },
  {
    icon: AlertTriangle,
    title: 'Gestion des Sinistres',
    description: 'Prise en charge et coordination des sinistres avec les assureurs pour protéger votre investissement.',
    features: ['Déclaration rapide', 'Suivi dossier', 'Coordination artisans'],
    color: 'from-amber-500 to-orange-500',
    accent: '#F59E0B',
    badge: null,
  },
  {
    icon: BarChart3,
    title: 'Optimisation Rendement',
    description: 'Analyse et recommandations pour maximiser le ROI de votre patrimoine : révision loyers, travaux stratégiques.',
    features: ['Audit rendement', 'Recommandations IA', 'Simulation fiscale'],
    color: 'from-pink-500 to-rose-600',
    accent: '#EC4899',
    badge: 'IA',
  },
  {
    icon: FileSearch,
    title: 'Reporting & Transparence',
    description: 'Tableau de bord propriétaire en temps réel. Chaque euro, chaque document, chaque action visible en un clic.',
    features: ['Dashboard temps réel', 'GED intégrée', 'Alertes automatiques'],
    color: 'from-teal-500 to-cyan-600',
    accent: '#14B8A6',
    badge: 'Nouveau',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-cyan-100 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            NOS SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Tout ce dont votre bien{' '}
            <span className="gradient-text">a besoin.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Une offre complète de gestion immobilière, pensée pour les propriétaires exigeants 
            qui veulent performance et sérénité.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-pointer card-hover"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
              
              {/* Top border gradient */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${service.color} text-white shadow-md`}>
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={22} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-gray-800">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: service.accent }}>
                En savoir plus
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 text-base"
          >
            Bénéficier de tous nos services
            <ArrowRight size={18} />
          </a>
          <p className="text-gray-400 text-sm mt-3">Audit gratuit · Sans engagement · Réponse sous 24h</p>
        </motion.div>
      </div>
    </section>
  );
}

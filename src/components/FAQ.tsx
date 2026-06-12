import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Pourquoi passer par une agence de gestion locative ?',
    a: "Gérer un bien immobilier seul représente en moyenne 8h de travail par mois et expose à de nombreux risques juridiques et financiers. En déléguant à Locagestion, vous gagnez du temps, sécurisez vos revenus avec la Garantie Loyers Impayés (GLI), bénéficiez d'une expertise juridique permanente et maximisez votre rentabilité grâce à notre connaissance du marché. Nos propriétaires constatent en moyenne +23% de rendement après 12 mois.",
  },
  {
    q: "Quels sont les frais de gestion locative ?",
    a: "Nos honoraires varient entre 6% et 8% HT des loyers encaissés selon la formule choisie. Ce tarif inclut : la gestion locative complète, la relation locataire, les états des lieux digitaux, le suivi administratif et le reporting mensuel. La mise en location est facturée séparément (1 mois de loyer HT en moyenne). Nous proposons également des forfaits annuels avec la GLI incluse. Demandez un devis personnalisé gratuit.",
  },
  {
    q: "Comment et quand sont versés mes loyers ?",
    a: "Vos loyers sont reversés chaque mois entre le 5 et le 10 du mois, accompagnés d'un relevé de gestion détaillé. En cas de souscription à notre garantie loyers impayés (GLI), vous êtes protégé même si le locataire ne paie pas. Le suivi de vos reversements est disponible en temps réel sur votre espace propriétaire en ligne, accessible 24h/24 depuis n'importe quel appareil.",
  },
  {
    q: "Puis-je suivre la gestion de mon bien en temps réel ?",
    a: "Oui, absolument. Votre espace propriétaire numérique vous donne accès en temps réel à : l'état des loyers encaissés, les documents (baux, états des lieux, quittances), les travaux en cours, les échanges avec le locataire (résumés), les rapports financiers mensuels et annuels. Tout est accessible depuis votre ordinateur ou smartphone, partout dans le monde.",
  },
  {
    q: "Que se passe-t-il en cas de loyer impayé ?",
    a: "Sans GLI, nous déclenchons immédiatement la procédure de relance amiable (appel, courrier recommandé) puis la procédure contentieuse si nécessaire, avec l'aide de nos partenaires juridiques. Avec notre Garantie Loyers Impayés (GLI), vous êtes remboursé dès le premier mois d'impayé, sans délai de carence. La GLI couvre également les détériorations immobilières et les frais de procédure. C'est la solution que nous recommandons à tous nos propriétaires.",
  },
  {
    q: "Puis-je résilier mon mandat de gestion locative ?",
    a: "Oui. Nos mandats de gestion sont résiliables à tout moment avec un préavis de 3 mois, conformément à la loi ALUR. Il n'y a aucuns frais de résiliation cachés. Si vous n'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement. Notre engagement, c'est votre satisfaction à long terme.",
  },
  {
    q: "Locagestion gère-t-il les travaux et sinistres ?",
    a: "Oui. Notre équipe coordonne tous les travaux d'entretien courant (plomberie, électricité, serrurerie) via notre réseau d'artisans partenaires certifiés RGE. En cas de sinistre (dégât des eaux, incendie, etc.), nous prenons en charge la déclaration auprès de l'assurance, le suivi du dossier et la coordination des réparations. Vous n'avez rien à faire.",
  },
  {
    q: "Locagestion peut-il gérer mon bien si je vis à l'étranger ?",
    a: "Absolument. Nous gérons des biens pour de nombreux propriétaires expatriés. Toute la gestion est 100% digitale : signature électronique, espace propriétaire en ligne, virements internationaux, reporting multilingue. Votre expert dédié est joignable par email, téléphone et visioconférence. La distance n'est plus un obstacle.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Tout ce que vous{' '}
            <span className="gradient-text">souhaitez savoir.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Des réponses claires et honnêtes à vos questions les plus importantes sur la gestion locative.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'border-cyan-200 shadow-lg shadow-cyan-50'
                  : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`font-semibold text-base pr-4 transition-colors ${
                  openIndex === i ? 'text-cyan-600' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-cyan-500 text-white rotate-180'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                }`}>
                  {openIndex === i ? <Minus size={15} /> : <Plus size={15} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-gradient-to-r from-cyan-200 to-transparent mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform duration-200"
          >
            Parler à un expert →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

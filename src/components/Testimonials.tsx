import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie-Claire D.',
    role: 'Propriétaire de 3 appartements',
    city: 'Paris 17e',
    avatar: 'MC',
    color: 'from-cyan-500 to-blue-600',
    rating: 5,
    text: "Depuis que j'ai confié mes biens à Locagestion, je n'ai plus aucun souci. Les loyers arrivent le 5 de chaque mois sans exception. Mon expert est joignable rapidement, et le reporting mensuel me donne une vision claire de mes revenus. Je recommande à tous les propriétaires.",
    gain: '+18% de rendement',
    duration: 'Client depuis 4 ans',
  },
  {
    id: 2,
    name: 'Philippe R.',
    role: 'Investisseur immobilier',
    city: 'Lyon 6e',
    avatar: 'PR',
    color: 'from-purple-500 to-purple-700',
    rating: 5,
    text: "J'ai un portefeuille de 8 biens et gérer seul était devenu impossible. Locagestion a tout pris en charge : la mise en location, les états des lieux, les sinistres. En 2 ans, j'ai optimisé mon rendement de plus de 20%. L'espace propriétaire en ligne est vraiment top.",
    gain: '+22% de rendement',
    duration: 'Client depuis 2 ans',
  },
  {
    id: 3,
    name: 'Sophie & Thomas M.',
    role: 'Propriétaires bailleurs',
    city: 'Bordeaux Centre',
    avatar: 'SM',
    color: 'from-green-500 to-emerald-600',
    rating: 5,
    text: "Nous avons hérité d'un appartement et ne savions pas comment le gérer. Locagestion nous a guidés de A à Z : estimation, mise en location, bail, assurance. On n'aurait pas pu faire mieux tout seuls. Merci pour cette sérénité retrouvée !",
    gain: '0 impayé en 3 ans',
    duration: 'Clients depuis 3 ans',
  },
  {
    id: 4,
    name: 'Jean-Marc L.',
    role: 'Propriétaire expatrié',
    city: 'Nice (géré depuis Dubaï)',
    avatar: 'JL',
    color: 'from-amber-500 to-orange-500',
    rating: 5,
    text: "Vivre à l'étranger et gérer un bien en France semblait impossible. Locagestion s'occupe de tout : je reçois mes loyers, des comptes rendus et je peux voir tout sur l'application. La distance n'est plus un problème. Service exceptionnel !",
    gain: 'Gestion 100% à distance',
    duration: 'Client depuis 5 ans',
  },
  {
    id: 5,
    name: 'Isabelle V.',
    role: 'Retraitée propriétaire',
    city: 'Toulouse',
    avatar: 'IV',
    color: 'from-pink-500 to-rose-600',
    rating: 5,
    text: "À la retraite, je voulais profiter de mes revenus locatifs sans le stress de la gestion. Locagestion est parfait pour ça. Équipe professionnelle, réactive et humaine. Je me sens vraiment accompagnée. Plus jamais je ne gérerai seule.",
    gain: 'Tranquillité totale',
    duration: 'Cliente depuis 6 ans',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="temoignages" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            TÉMOIGNAGES CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Ils nous font{' '}
            <span className="gradient-text">confiance.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-gray-900">4.9</span>
            <span className="text-gray-400 text-sm">/ 5 — Note moyenne sur 500+ avis</span>
          </div>
        </motion.div>

        {/* Carousel – desktop */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-5 mb-8"
            >
              {visible.map((t, idx) => (
                <div
                  key={t.id}
                  className={`relative bg-white rounded-2xl border p-6 flex flex-col shadow-lg transition-all duration-300 ${
                    idx === 0
                      ? 'border-cyan-200 shadow-cyan-50 shadow-xl scale-[1.02]'
                      : 'border-gray-100'
                  }`}
                >
                  {/* Quote icon */}
                  <Quote size={32} className="text-gray-100 mb-3 flex-shrink-0" />

                  {/* Rating */}
                  <StarRating rating={t.rating} />

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4 flex-1">"{t.text}"</p>

                  {/* Gain badge */}
                  <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${t.color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit`}>
                    ✦ {t.gain}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                      <div className="text-gray-400 text-xs">{t.city} · {t.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-cyan-400 flex items-center justify-center text-gray-600 hover:text-cyan-600 transition-all duration-200 hover:bg-cyan-50"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-cyan-500 w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-cyan-400 flex items-center justify-center text-gray-600 hover:text-cyan-600 transition-all duration-200 hover:bg-cyan-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-cyan-200 p-6 shadow-xl mb-6"
            >
              <Quote size={28} className="text-gray-100 mb-3" />
              <StarRating rating={testimonials[current].rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">"{testimonials[current].text}"</p>
              <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${testimonials[current].color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4`}>
                ✦ {testimonials[current].gain}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-black text-sm`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonials[current].name}</div>
                  <div className="text-gray-400 text-xs">{testimonials[current].city} · {testimonials[current].duration}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan-500 w-6' : 'bg-gray-200 w-2'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust logos / platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-10 border-t border-gray-100 text-center"
        >
          <p className="text-gray-400 text-sm mb-5">Noté excellemment sur toutes les plateformes</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: 'Google', rating: '4.9★', reviews: '342 avis' },
              { name: 'Trustpilot', rating: '4.8★', reviews: '218 avis' },
              { name: 'Immonot', rating: '4.9★', reviews: '87 avis' },
              { name: 'SeLoger Pro', rating: '4.7★', reviews: '125 avis' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-gray-700">{p.name}</span>
                <span className="text-amber-500 font-bold">{p.rating}</span>
                <span className="text-gray-400">({p.reviews})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

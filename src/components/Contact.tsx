import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Building2 } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 (0)1 XX XX XX XX',
    sub: 'Lun–Ven 9h–18h',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@locagestion.com',
    sub: 'Réponse sous 4h',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Paris, Lyon, Bordeaux',
    sub: '3 agences en France',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Clock,
    label: 'Rappel gratuit',
    value: 'Sous 2h ouvrées',
    sub: 'Du lundi au vendredi',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    type: 'Appartement',
    message: '',
    goal: 'gestion',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
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
            CONTACT & AUDIT GRATUIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Parlons de votre{' '}
            <span className="gradient-text">patrimoine.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Un expert Locagestion vous rappelle sous 2h pour analyser votre situation et vous proposer 
            une solution sur mesure. Gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact methods */}
            <div className="space-y-3">
              {contactMethods.map((m) => (
                <div key={m.label} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-200 group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <m.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{m.label}</div>
                    <div className="text-gray-900 font-bold text-sm">{m.value}</div>
                    <div className="text-gray-400 text-xs">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promise box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={18} className="text-cyan-400" />
                <span className="text-white font-bold text-sm">Notre promesse</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Audit gratuit et sans engagement',
                  'Expert dédié dans les 24h',
                  'Estimation loyer offerte',
                  'Devis transparent et détaillé',
                  '30 jours satisfait ou remboursé',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick CTA phone */}
            <a
              href="tel:+33XXXXXXXXX"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={18} />
              Être rappelé maintenant
            </a>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5 shadow-lg">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Demande envoyée !</h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                  Un expert Locagestion vous contactera sous 2h ouvrées. 
                  En attendant, consultez notre FAQ ou découvrez nos services.
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-6 py-3 rounded-xl"
                >
                  Découvrir nos services <ArrowRight size={16} />
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl p-7 shadow-xl">
                <h3 className="text-xl font-black text-gray-900 mb-1">Demandez votre audit gratuit</h3>
                <p className="text-gray-400 text-sm mb-6">Complétez le formulaire — réponse garantie sous 2h</p>

                {/* Goal selector */}
                <div className="flex gap-2 mb-5">
                  {[
                    { v: 'gestion', l: '🏠 Gestion locative' },
                    { v: 'location', l: '🔑 Mise en location' },
                    { v: 'estimation', l: '📊 Estimation' },
                  ].map((g) => (
                    <button
                      key={g.v}
                      type="button"
                      onClick={() => setForm({ ...form, goal: g.v })}
                      className={`flex-1 text-xs font-semibold py-2.5 px-2 rounded-xl border transition-all ${
                        form.goal === g.v
                          ? 'bg-cyan-500 border-cyan-500 text-white shadow-md'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-cyan-300'
                      }`}
                    >
                      {g.l}
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Prénom & Nom *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06 XX XX XX XX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jean@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Ville du bien *</label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Paris, Lyon, Bordeaux..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder-gray-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Type de bien</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all bg-white"
                  >
                    {['Studio / T1', 'T2 / T3', 'T4 et plus', 'Maison', 'Local commercial', 'Immeuble / Portefeuille'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message (optionnel)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre situation, vos besoins ou posez une question..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder-gray-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande d'audit gratuit
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs mt-3">
                  🔒 Vos données sont sécurisées · Aucun démarchage · Conformité RGPD
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

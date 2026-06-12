import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, MessageCircle, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const suggestions = [
  'Quel est le loyer moyen pour mon type de bien ?',
  'Combien coûte la gestion locative ?',
  'Comment sécuriser mes loyers contre les impayés ?',
  'Puis-je gérer mon bien depuis l\'étranger ?',
  'Quels documents faut-il pour la mise en location ?',
];

const mockConversation = [
  {
    role: 'bot',
    message: "Bonjour ! Je suis l'Assistant IA Locagestion. Je peux estimer vos revenus, répondre à vos questions et vous orienter vers le bon expert. Comment puis-je vous aider ?",
    delay: 0,
  },
  {
    role: 'user',
    message: "Quel loyer puis-je espérer pour un T2 à Paris 11e ?",
    delay: 1,
  },
  {
    role: 'bot',
    message: "Selon nos données de marché actualisées, un T2 dans le 11e arrondissement se loue entre 1 200€ et 1 650€/mois selon la surface, l'étage et les prestations. Je vous propose une estimation précise gratuite avec un expert dans les 24h. Souhaitez-vous prendre rendez-vous ?",
    delay: 2,
  },
];

const features = [
  { icon: MessageCircle, label: 'Réponse instantanée', sub: '24h/7j' },
  { icon: TrendingUp, label: 'Estimation IA', sub: 'En temps réel' },
  { icon: Calendar, label: 'Prise de RDV', sub: 'Automatique' },
  { icon: CheckCircle, label: 'Qualification', sub: 'Intelligente' },
];

export default function AISection() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    mockConversation.forEach((msg, i) => {
      const t = setTimeout(() => {
        if (i > 0 && mockConversation[i].role === 'bot') setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(i + 1);
        }, 800);
      }, msg.delay * 1400);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 lg:py-28 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      
      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
          style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">Intelligence Artificielle</span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Votre assistant{' '}
              <span className="gradient-text">IA personnel.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Notre assistant IA est disponible 24h/24 pour répondre à toutes vos questions, 
              estimer vos revenus locatifs et vous connecter avec le bon expert au bon moment.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="glassmorphism rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <f.icon size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{f.label}</div>
                    <div className="text-white/40 text-xs">{f.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggestions */}
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Questions fréquentes</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.slice(0, 3).map((s) => (
                  <button
                    key={s}
                    className="text-xs text-cyan-300/80 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-xl" />
              
              {/* Chat window */}
              <div className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-slate-800/50">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-slate-800" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Assistant Locagestion</div>
                    <div className="text-green-400 text-xs flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      En ligne — Répond en moins de 30 secondes
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Sparkles size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold">IA</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4 min-h-[280px]">
                  {!started ? (
                    <div className="flex flex-col items-center justify-center h-40 gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
                        <Bot size={30} className="text-white" />
                      </div>
                      <button
                        onClick={() => setStarted(true)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform text-sm"
                      >
                        Démarrer la conversation →
                      </button>
                    </div>
                  ) : (
                    <>
                      <AnimatePresence>
                        {mockConversation.slice(0, visibleMessages).map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                          >
                            {msg.role === 'bot' && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <Bot size={14} className="text-white" />
                              </div>
                            )}
                            <div
                              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                msg.role === 'bot'
                                  ? 'bg-white/10 text-white border border-white/10'
                                  : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
                              }`}
                            >
                              {msg.message}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                            <Bot size={14} className="text-white" />
                          </div>
                          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-1">
                            {[0, 1, 2].map(i => (
                              <motion.div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-white/60"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}
                </div>

                {/* Input */}
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Posez votre question..."
                      className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
                    />
                    <button className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0">
                      <Send size={13} className="text-white" />
                    </button>
                  </div>
                  <p className="text-white/20 text-[10px] text-center mt-2">
                    Réponse instantanée · Données sécurisées · Aucun engagement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

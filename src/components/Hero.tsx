import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, TrendingUp, Clock, Star } from 'lucide-react';

const floatingBadges = [
  { icon: TrendingUp, label: '+23% rendement', color: 'from-cyan-500 to-cyan-600', delay: 0 },
  { icon: Shield, label: 'Loyers sécurisés', color: 'from-purple-500 to-purple-700', delay: 0.3 },
  { icon: Clock, label: 'Suivi temps réel', color: 'from-blue-500 to-blue-700', delay: 0.6 },
  { icon: Star, label: '4.9/5 satisfaction', color: 'from-amber-500 to-orange-500', delay: 0.9 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero grid-pattern noise">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-900/30 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-900/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/10 blur-3xl" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" style={{ top: `${15 + i * 14}%` }} />
          ))}
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-cyan-400"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-purple-400"
        />
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-blue-400/60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glassmorphism px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Nouvelle génération de gestion locative</span>
              <ArrowRight size={14} className="text-cyan-400" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 text-shadow"
            >
              La gestion locative{' '}
              <span className="block gradient-text mt-1">nouvelle génération.</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Confiez votre bien à des experts et maximisez votre rentabilité sans contraintes administratives. 
              La tranquillité d'esprit, garantie.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 shimmer" />
                <span className="relative">Demander un audit gratuit</span>
                <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 glassmorphism text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Play size={16} className="fill-white/80" />
                Découvrir nos services
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              {[
                { num: '500+', label: 'Biens gérés' },
                { num: '15 ans', label: 'D\'expérience' },
                { num: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="text-white font-black text-lg">{stat.num}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                  <div className="w-px h-4 bg-white/20 last:hidden" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Dashboard Mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative glassmorphism rounded-3xl p-1.5 shadow-2xl glow-blue">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs text-white/40 font-mono">locagestion.dashboard.app</div>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5 space-y-4">
                    {/* KPI Row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Revenus', value: '12 450€', change: '+8.2%', color: 'text-cyan-400' },
                        { label: 'Occupation', value: '97%', change: '+2.1%', color: 'text-green-400' },
                        { label: 'Biens', value: '24', change: '+3', color: 'text-purple-400' },
                      ].map((kpi) => (
                        <div key={kpi.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                          <div className="text-white/50 text-[10px] font-medium mb-1">{kpi.label}</div>
                          <div className={`font-black text-sm ${kpi.color}`}>{kpi.value}</div>
                          <div className="text-green-400 text-[9px] font-semibold mt-0.5">{kpi.change}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-white/60 text-xs font-medium mb-3">Revenus locatifs — 2024</div>
                      <div className="flex items-end gap-1.5 h-16">
                        {[45, 62, 55, 70, 58, 80, 75, 88, 72, 95, 85, 97].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                            style={{ height: `${h}%` }}
                            className={`flex-1 rounded-sm origin-bottom ${
                              i === 11
                                ? 'bg-gradient-to-t from-cyan-500 to-cyan-300'
                                : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-white/30 text-[9px] mt-2">
                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(m => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Property list */}
                    <div className="space-y-2">
                      {[
                        { name: '12 Rue de la Paix, Paris', status: 'Loué', rent: '1 850€', dot: 'bg-green-400' },
                        { name: '5 Avenue Gambetta, Lyon', status: 'Loué', rent: '920€', dot: 'bg-green-400' },
                        { name: '8 Bd Victor Hugo, Nice', status: 'En cours', rent: '1 200€', dot: 'bg-amber-400' },
                      ].map((prop) => (
                        <div key={prop.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${prop.dot}`} />
                            <div>
                              <div className="text-white text-[11px] font-medium">{prop.name}</div>
                              <div className="text-white/40 text-[9px]">{prop.status}</div>
                            </div>
                          </div>
                          <div className="text-cyan-400 text-xs font-bold">{prop.rent}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + badge.delay }}
                  className={`absolute glassmorphism-light shadow-xl rounded-xl px-3 py-2 flex items-center gap-2 ${
                    i === 0 ? '-top-4 -left-4' :
                    i === 1 ? 'top-1/3 -right-6' :
                    i === 2 ? '-bottom-4 left-1/4' :
                    '-bottom-6 right-1/3'
                  } animate-float`}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                    <badge.icon size={14} className="text-white" />
                  </div>
                  <span className="text-gray-800 text-xs font-bold whitespace-nowrap">{badge.label}</span>
                </motion.div>
              ))}

              {/* Notification popup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute top-8 -right-2 lg:-right-8 glassmorphism rounded-xl px-3 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield size={13} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-[10px] font-bold">Loyer encaissé</div>
                    <div className="text-green-400 text-[10px]">+1 850€ reçu</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

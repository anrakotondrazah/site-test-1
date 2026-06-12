import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Award, Users, Banknote, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Biens gérés', sublabel: 'En France', color: 'from-cyan-500 to-cyan-600' },
  { icon: Award, value: 15, suffix: ' ans', label: "D'expérience", sublabel: 'Sur le marché', color: 'from-purple-500 to-purple-700' },
  { icon: Users, value: 98, suffix: '%', label: 'Satisfaction client', sublabel: 'Score moyen 2024', color: 'from-blue-500 to-blue-600' },
  { icon: Banknote, value: 6000, suffix: '+', label: 'Loyers encaissés', sublabel: 'Par an', color: 'from-amber-500 to-orange-500' },
  { icon: TrendingUp, value: 23, suffix: '%', label: 'Rendement moyen', sublabel: "D'optimisation", color: 'from-green-500 to-emerald-600' },
];

function CountUp({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }
  }, [inView, end]);

  return (
    <span>
      {count.toLocaleString('fr-FR')}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative -mt-1 bg-white py-16 lg:py-20">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-2">LOCAGESTION EN CHIFFRES</p>
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900">
            La confiance, prouvée par les données
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={20} className="text-white" />
              </div>
              
              {/* Value */}
              <div className="text-3xl lg:text-4xl font-black text-gray-900 leading-none mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              
              {/* Label */}
              <div className="text-gray-800 font-semibold text-sm">{stat.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{stat.sublabel}</div>

              {/* Hover gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-gray-100"
        >
          {[
            { label: 'Loi ALUR', desc: 'Conforme' },
            { label: 'Garantie Loyers Impayés', desc: 'GLI' },
            { label: 'FNAIM', desc: 'Membre' },
            { label: 'Assurance Professionnelle', desc: 'RC Pro' },
            { label: 'RGPD', desc: 'Certifié' },
          ].map((cert) => (
            <div key={cert.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 hover:border-cyan-300 hover:bg-cyan-50 transition-colors cursor-default">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div>
                <div className="text-gray-800 text-xs font-bold">{cert.label}</div>
                <div className="text-gray-400 text-[10px]">{cert.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

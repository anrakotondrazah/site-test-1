import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, X } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-1/2 md:-translate-x-1/2 md:w-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-3.5 flex items-center gap-4">
            {/* Status dot */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 text-sm font-medium hidden sm:block">Expert disponible</span>
            </div>

            <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

            {/* CTA buttons */}
            <div className="flex items-center gap-3 flex-1 md:flex-none">
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <Phone size={15} />
                <span className="hidden sm:block">Être rappelé</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Audit gratuit
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => { setDismissed(true); setVisible(false); }}
              className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

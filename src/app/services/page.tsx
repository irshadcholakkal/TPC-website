'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const icons = ['📦', '🛍️', '💎', '📊'];

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-7 group cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-black font-heading"
        style={{ background: 'rgba(249,115,22,0.1)', color: '#F97316', border: '1px solid rgba(249,115,22,0.2)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <h4 className="text-[17px] font-bold mb-2.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </motion.div>
  );
}

export default function ServicesPage() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative section-padding overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #F97316, transparent 70%)' }}
      />

      <div className={`max-w-7xl mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'rtl' : 'ltr'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="badge mb-5">{t.services.badge}</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-5 text-gradient-white">
            {t.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {t.services.categories.map((service, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-xl"
                  style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}
                >
                  {icons[catIndex]}
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {service.category}
                </h3>
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.items.map((item, itemIndex) => (
                  <ServiceCard
                    key={itemIndex}
                    title={item.title}
                    description={item.description}
                    index={itemIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

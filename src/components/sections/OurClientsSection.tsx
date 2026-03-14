'use client';

import { Language, useUISettings } from '@/components/providers/UISettingsProvider';

const CLIENTS_COPY: Record<Language, { heading: string }> = {
  en: { heading: 'Our Clients' },
  ar: { heading: 'عملائنا' },
  fr: { heading: 'Nos Clients' },
  nl: { heading: 'Onze Klanten' },
  tl: { heading: 'Aming mga Kliyente' },
  hi: { heading: 'हमारे ग्राहक' },
};

const CLIENTS = [
  { name: 'New Delmon', domain: 'newdelmon.com' },
  { name: 'Pets Origin', domain: 'petsorigin.com', logoPath: '/images/clients/pets-origin.png' },
  { name: 'Welltech International', domain: 'welltechinternational.com', logoPath: '/images/clients/welltech.png' },
];

export default function OurClientsSection() {
  const { language } = useUISettings();
  const content = CLIENTS_COPY[language] || CLIENTS_COPY.en;

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-strong)',
        padding: '4rem 0',
      }}
    >
      <div className="container mx-auto px-4">
        <p
          className="text-center mb-10"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--text-quiet)',
          }}
        >
          {content.heading}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {CLIENTS.map((client, i) => (
            <a 
              key={i} 
              href={`https://${client.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:-translate-y-1"
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border-strong)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={client.logoPath || `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`} 
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain transition-all duration-300"
                  style={{ filter: 'grayscale(100%)', opacity: 0.7 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                />
              </div>
              <span 
                className="text-sm font-medium transition-colors duration-300 group-hover:text-primary" 
                style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body), system-ui' }}
              >
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

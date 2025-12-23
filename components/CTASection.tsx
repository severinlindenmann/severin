import { useLocale } from '../lib/LocaleContext';
import EmailCopy from './EmailCopy';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  note?: string;
  variant?: 'default' | 'gradient';
}

export default function CTASection({
  title,
  description,
  buttonText = 'Kontakt aufnehmen',
  buttonHref = 'mailto:hello@severin.io',
  note,
  variant = 'default'
}: CTASectionProps) {
  const { locale } = useLocale();
  
  const defaultTitle = locale === 'de' 
    ? 'Bereit, dein Projekt zu starten?' 
    : 'Ready to start your project?';
  
  const defaultDescription = locale === 'de'
    ? 'Lass uns gemeinsam deine Idee in die Realität umsetzen. Kontaktiere mich für ein unverbindliches Erstgespräch.'
    : 'Let\'s bring your idea to life together. Contact me for a free initial consultation.';
  
  const defaultNote = locale === 'de'
    ? 'Antwort in der Regel innerhalb von 24 Stunden'
    : 'Usually responds within 24 hours';

  return (
    <>
      <section className={`cta-section cta-section--${variant}`}>
        <h2>{title || defaultTitle}</h2>
        <p>{description || defaultDescription}</p>
        {buttonHref?.startsWith('mailto:') ? (
          <EmailCopy className="btn btn--primary btn--large">
            {buttonText}
          </EmailCopy>
        ) : (
          <a href={buttonHref} className="btn btn--primary btn--large">
            {buttonText}
          </a>
        )}
        {note && <p className="cta-section__note">{note}</p>}
        {!note && <p className="cta-section__note">{defaultNote}</p>}
      </section>

      <style jsx>{`
        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 24px;
          border: 1px solid var(--surface-border);
          background: var(--surface);
          box-shadow: var(--surface-shadow);
          backdrop-filter: blur(18px);
          margin: 4rem 0;
        }

        .cta-section--gradient {
          background: linear-gradient(135deg, var(--surface), var(--background));
        }

        .cta-section h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 1rem;
        }

        .cta-section p {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-section__note {
          font-size: 0.95rem;
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }

        .btn--primary {
          background: linear-gradient(135deg, var(--accent), var(--accent-strong));
          color: white;
        }

        .btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
        }

        .btn--large {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 3rem 1.5rem;
          }

          .cta-section h2 {
            font-size: 2rem;
          }

          .cta-section p {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </>
  );
}

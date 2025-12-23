import { useLocale } from '../lib/LocaleContext';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇨🇭' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const changeLanguage = (newLocale: 'de' | 'en') => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="language-switcher__flag">{currentLanguage.flag}</span>
        <span className="language-switcher__code">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`language-switcher__icon ${isOpen ? 'language-switcher__icon--open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${
                lang.code === locale ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-switcher__flag">{lang.flag}</span>
              <span className="language-switcher__name">{lang.name}</span>
              {lang.code === locale && (
                <svg
                  className="language-switcher__check"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L6 12L2.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }

        .language-switcher__button {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--text);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .language-switcher__button:hover {
          background: var(--surface-hover);
          border-color: var(--accent);
        }

        .language-switcher__flag {
          font-size: 1.125rem;
          line-height: 1;
        }

        .language-switcher__code {
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .language-switcher__icon {
          transition: transform 0.2s ease;
          color: var(--text-muted);
        }

        .language-switcher__icon--open {
          transform: rotate(180deg);
        }

        .language-switcher__dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          min-width: 140px;
          background: var(--surface);
          border: 1px solid var(--surface-border);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          z-index: 1000;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .language-switcher__option {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          width: 100%;
          padding: 0.625rem 0.875rem;
          background: transparent;
          border: none;
          color: var(--text);
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.15s ease;
          text-align: left;
        }

        .language-switcher__option:hover {
          background: var(--surface-hover);
        }

        .language-switcher__option--active {
          background: var(--accent-light);
          color: var(--accent-strong);
          font-weight: 600;
        }

        .language-switcher__name {
          flex: 1;
        }

        .language-switcher__check {
          color: var(--accent-strong);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .language-switcher__dropdown {
            right: auto;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
}

import LanguageSwitcher from './components/LanguageSwitcher';
import { useLocale } from './lib/LocaleContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmailCopy from './components/EmailCopy';

const YEAR = new Date().getFullYear();

export default {
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  darkMode: true,
  navbar: () => {
    const { locale = 'de' } = useLocale();
    const router = useRouter();
    
    const navItems = locale === 'de' 
      ? [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Projekte', href: '/projects' },
          { label: 'Über mich', href: '/about' },
          { label: 'Beiträge', href: '/posts' }
        ]
      : [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Projects', href: '/projects' },
          { label: 'About', href: '/about' },
          { label: 'Posts', href: '/posts' }
        ];

    return (
      <nav className="main-nav">
        <div className="main-nav__container">
          <Link href="/" className="main-nav__logo">
            SL
          </Link>
          <ul className="main-nav__items">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={router.pathname === item.href ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
          .main-nav {
            position: sticky;
            top: 0;
            z-index: 50;
            padding: 1rem 0;
            margin-bottom: 2rem;
            background: var(--background);
            border-bottom: 1px solid var(--surface-border);
            backdrop-filter: blur(18px);
          }
          
          .main-nav__container {
            max-width: 90rem;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .main-nav__logo {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent), var(--accent-strong));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-decoration: none;
          }
          
          .main-nav__items {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          
          .main-nav__items a {
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
            position: relative;
          }
          
          .main-nav__items a:hover,
          .main-nav__items a.active {
            color: var(--accent);
          }
          
          .main-nav__items a.active::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--accent);
          }
          
          @media (max-width: 768px) {
            .main-nav__items {
              gap: 1rem;
              font-size: 0.9rem;
            }
            
            .main-nav__container {
              padding: 0 1rem;
            }
          }
          
          @media (max-width: 600px) {
            .main-nav__items {
              gap: 0.75rem;
              font-size: 0.85rem;
            }
          }
        `}</style>
      </nav>
    );
  },
  footer: () => {
    const { locale = 'de' } = useLocale();
    const footerText = locale === 'de' ? 'Hergestellt in Zürich' : 'Crafted in Zurich';
    
    return (
      <footer className="site-footer">
        <small>
          {footerText} • <time>{YEAR}</time> © Severin Lindenmann
        </small>
        <nav aria-label="Social links" className="footer-links">
          <a href="/feed.xml">RSS</a>
          <a
            href="https://github.com/severinlindenmann"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/severin-lindenmann/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <EmailCopy>Email</EmailCopy>
          <a
            href="https://wa.me/41765613150"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
        <style jsx>{`
          .site-footer {
            margin: 6rem 0 3rem;
            padding: 2rem 2.5rem;
            border-radius: 24px;
            border: 1px solid var(--surface-border);
            background: var(--surface);
            box-shadow: var(--surface-shadow);
            backdrop-filter: blur(18px);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          .site-footer small {
            font-size: 0.9rem;
            color: var(--text-muted);
          }
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 1.25rem;
            flex-wrap: wrap;
          }
          .footer-links a {
            color: var(--accent);
            font-weight: 600;
            text-decoration: none;
          }
          .footer-links a:hover {
            color: var(--accent-strong);
          }
        `}</style>
      </footer>
    );
  },
};

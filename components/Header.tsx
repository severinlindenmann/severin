import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <>
      <div className="language-switcher-nav">
        <LanguageSwitcher />
      </div>
      <style jsx global>{`
        body {
          position: relative;
        }
        
        .language-switcher-nav {
          position: fixed !important;
          top: 1rem !important;
          right: 1rem !important;
          z-index: 999999 !important;
          isolation: isolate !important;
        }
        
        @media (max-width: 768px) {
          .language-switcher-nav {
            top: 0.75rem !important;
            right: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}

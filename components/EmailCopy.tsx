import { useState } from 'react';

interface EmailCopyProps {
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EmailCopy({ 
  email = 'hello@severin.io', 
  className = '',
  children 
}: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <button 
        onClick={handleCopy} 
        className={`email-copy ${className}`}
        type="button"
      >
        {children || email}
        {copied && <span className="email-copy__tooltip">E-Mail kopiert</span>}
      </button>
      
      <style jsx>{`
        .email-copy {
          position: relative;
          background: none;
          border: none;
          padding: 0;
          color: inherit;
          font: inherit;
          cursor: pointer;
          text-decoration: inherit;
          transition: color 0.2s ease;
        }
        
        .email-copy:hover {
          color: var(--accent-strong);
        }
        
        .email-copy__tooltip {
          position: absolute;
          top: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-strong);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.2s ease;
        }
        
        .email-copy__tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: var(--accent-strong);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </>
  );
}

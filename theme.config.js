const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer className="site-footer">
      <small>
        Crafted in Zurich • <time>{YEAR}</time> © Severin Lindenmann
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
        <a href="mailto:hello@severin.io">Email</a>
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
  ),
};

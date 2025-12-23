import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Severin Lindenmann | Web Apps & KI-Lösungen – Privacy First & GDPR-konform",
    description:
      "Freelance Developer aus Zürich für massgeschneiderte Web Apps, KI-Integration und Code Review. Privacy First, GDPR-konform, Open Source. Ab CHF 500.",
    keywords: "Web Apps Zürich, KI Integration Schweiz, GDPR konforme Entwicklung, Privacy First, React Developer Zürich, FastAPI, Freelance Developer, Code Review, AI Integration",
    author: "Severin Lindenmann",
    image: "https://severin.io/images/og-image.jpg",
    url: "https://severin.io",
    locale: "de_CH",
    type: "website",
  };

  return (
    <Html lang="de">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        
        {/* Language Alternates */}
        <link rel="alternate" hrefLang="de" href="https://severin.io" />
        <link rel="alternate" hrefLang="en" href="https://severin.io" />
        <link rel="alternate" hrefLang="x-default" href="https://severin.io" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data - Person/Freelancer Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://severin.io/#person",
              "name": "Severin Lindenmann",
              "url": "https://severin.io",
              "image": "https://severin.io/images/og-image.jpg",
              "email": "hello@severin.io",
              "telephone": "+41765613150",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zürich",
                "addressCountry": "CH"
              },
              "jobTitle": "Freelance Full Stack Developer & Data Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Hochschule Luzern"
              },
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "FastAPI",
                "AI Integration",
                "Data Engineering",
                "GDPR Compliance",
                "Privacy-First Development"
              ],
              "sameAs": [
                "https://github.com/severinlindenmann",
                "https://www.linkedin.com/in/severin-lindenmann/"
              ]
            })
          }}
        />
        
        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Severin Lindenmann - Web Apps & KI-Lösungen",
              "description": meta.description,
              "url": "https://severin.io",
              "telephone": "+41765613150",
              "email": "hello@severin.io",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zürich",
                "addressRegion": "ZH",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "47.3769",
                "longitude": "8.5417"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Switzerland"
              },
              "priceRange": "CHF 500+",
              "serviceType": [
                "Web Application Development",
                "AI Integration",
                "Code Review",
                "Technical Consulting"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

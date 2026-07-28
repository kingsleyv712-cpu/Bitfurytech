type HeroProps = {
  language: "en" | "fr";
};

const copy = {
  en: {
    eyebrow: "Building Wealth • Securing Futures",

    title: "Invest Smarter. Grow Wealth. Build Your Financial Future.",

    lead:
      "BitfuryTech Investment provides secure and diversified investment opportunities across Cryptocurrency, Real Estate, Agriculture, and Global Stocks. Our mission is to help investors build sustainable wealth through disciplined strategies, transparency, and innovation.",

    primary: "Start Investing",

    secondary: "Explore Our Company",

    cardTitle: "Portfolio Performance",

    performance: "+18.4% YTD",

    bullet1: "✔ Diversified Investment Portfolio",

    bullet2: "✔ Real-Time Market Intelligence",

    bullet3: "✔ Secure Asset Management",

    bullet4: "✔ Transparent Daily Reporting",

    bullet5: "✔ Global Investment Opportunities",
  },

  fr: {
    eyebrow: "Construire la richesse • Sécuriser l'avenir",

    title:
      "Investissez intelligemment. Développez votre patrimoine. Construisez votre avenir financier.",

    lead:
      "BitfuryTech Investment offre des opportunités d'investissement sécurisées et diversifiées dans les cryptomonnaies, l'immobilier, l'agriculture et les actions internationales. Notre mission est d'aider les investisseurs à bâtir un patrimoine durable grâce à la transparence, à l'innovation et à des stratégies disciplinées.",

    primary: "Commencer à investir",

    secondary: "Découvrir notre entreprise",

    cardTitle: "Performance du portefeuille",

    performance: "+18.4% YTD",

    bullet1: "✔ Portefeuille diversifié",

    bullet2: "✔ Intelligence des marchés en temps réel",

    bullet3: "✔ Gestion sécurisée des actifs",

    bullet4: "✔ Rapports transparents",

    bullet5: "✔ Opportunités mondiales d'investissement",
  },
};

export default function Hero({ language }: HeroProps) {
  const t = copy[language];

  return (
    <section className="hero-section" id="top">
      {/* Left Side */}
      <div className="hero-copy">

        <p className="eyebrow">{t.eyebrow}</p>

        <h1>
          {t.title}
        </h1>

        <p className="lead">{t.lead}</p>

        <div className="hero-actions">

          <a className="button" href="#plans">
            {t.primary}
          </a>

          <a className="button button-outline" href="#about">
            {t.secondary}
          </a>

        </div>
      </div>

      {/* Right Side */}
      <div
        className="hero-card"
        aria-label="BitfuryTech Portfolio Overview"
      >
        <div className="hero-card-top">

          <span>{t.cardTitle}</span>

          <strong>{t.performance}</strong>

        </div>

        <ul>

          <li>{t.bullet1}</li>

          <li>{t.bullet2}</li>

          <li>{t.bullet3}</li>

          <li>{t.bullet4}</li>

          <li>{t.bullet5}</li>

        </ul>

      </div>
    </section>
  );
}

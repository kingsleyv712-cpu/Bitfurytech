import { useState } from "react";

type PlansProps = {
  language: "en" | "fr";
};

const copy = {
  en: {
    eyebrow: "Investment Plans",
    title: "Diversify Your Investments With Confidence",
    description:
      "Explore professionally managed investment opportunities across Real Estate, Stocks, Agriculture and Cryptocurrency.",
    learnMore: "Learn More",
    investNow: "Invest Now",
    overview: "Overview",
    returns: "How BitfuryTech Generates Returns",
    benefits: "Benefits",
    close: "Close",
  },
  fr: {
    eyebrow: "Plans d'investissement",
    title: "Diversifiez vos investissements en toute confiance",
    description:
      "Découvrez des opportunités d'investissement gérées par des professionnels dans l'immobilier, les actions, l'agriculture et les cryptomonnaies.",
    learnMore: "En savoir plus",
    investNow: "Investir maintenant",
    overview: "Aperçu",
    returns: "Comment BitfuryTech génère des rendements",
    benefits: "Avantages",
    close: "Fermer",
  },
};

const plans = [
  {
    id: 1,
    title: "Real Estate",
    image: "/images/plans/real-estate.jpg",
    subtitle: "Building Wealth Through Premium Properties",

    overview:
      "BitfuryTech's Real Estate Investment Plan gives investors access to professionally selected residential, commercial, hospitality and industrial properties located in high-growth markets. Every property undergoes comprehensive legal, financial and market analysis before acquisition.",

    income:
      "Investor returns are generated through rental income, commercial leasing, property appreciation, strategic development projects, property resale and carefully managed refinancing opportunities.",

    benefits: [
      "Passive rental income",
      "Professional property management",
      "Capital appreciation",
      "Diversified property portfolio",
      "Long-term wealth creation",
    ],
  },

  {
    id: 2,
    title: "Stocks",
    image: "/images/plans/stocks.jpg",
    subtitle: "Global Equity Investment",

    overview:
      "Our Stocks Investment Plan provides diversified exposure to carefully selected global companies across technology, finance, healthcare, energy, manufacturing and consumer sectors.",

    income:
      "Returns are generated through capital appreciation, dividend income, disciplined portfolio management, sector diversification and continuous market analysis.",

    benefits: [
      "Blue-chip companies",
      "Dividend income",
      "Professional portfolio management",
      "Quarterly reviews",
      "Long-term capital growth",
    ],
  },

  {
    id: 3,
    title: "Agriculture",
    image: "/images/plans/agriculture.jpg",
    subtitle: "Sustainable Agricultural Investments",

    overview:
      "Invest in commercial agriculture projects including palm oil, rice, cassava, cocoa, livestock and food processing businesses supported by experienced operators.",

    income:
      "Investor income comes from agricultural production, commodity sales, harvest revenue, processing activities and long-term supply contracts.",

    benefits: [
      "Commodity-backed assets",
      "Harvest revenue",
      "Food production",
      "Sustainable farming",
      "Growing global demand",
    ],
  },

  {
    id: 4,
    title: "Cryptocurrency",
    image: "/images/plans/crypto.jpg",
    subtitle: "Managed Digital Asset Portfolio",

    overview:
      "Our Cryptocurrency Investment Plan focuses on professionally managed exposure to Bitcoin, Ethereum and carefully selected digital assets using disciplined investment strategies.",

    income:
      "Returns are generated through long-term appreciation, strategic trading opportunities, portfolio diversification and active market monitoring while maintaining strict risk controls.",

    benefits: [
      "Bitcoin & Ethereum",
      "Portfolio diversification",
      "Risk management",
      "Blockchain innovation",
      "Professional monitoring",
    ],
  },
];

export default function Plans({ language }: PlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const t = copy[language];

  return (
    <section className="section" id="plans">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>

        <h2>{t.title}</h2>

        <p>{t.description}</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <img src={plan.image} alt={plan.title} />

            <h3>{plan.title}</h3>

            <p>{plan.subtitle}</p>

            <div className="plan-actions">
              <button
                className="button button-outline"
                onClick={() => setSelectedPlan(plan)}
              >
                {t.learnMore}
              </button>

              <a className="button" href="/register">
                {t.investNow}
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPlan.image}
              alt={selectedPlan.title}
              style={{
                width: "100%",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            />

            <h2>{selectedPlan.title}</h2>

            <h3>{t.overview}</h3>

            <p>{selectedPlan.overview}</p>

            <h3 style={{ marginTop: "20px" }}>
              {t.returns}
            </h3>

            <p>{selectedPlan.income}</p>

            <h3 style={{ marginTop: "20px" }}>
              {t.benefits}
            </h3>

            <ul>
              {selectedPlan.benefits.map((benefit: string) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <div
              className="plan-actions"
              style={{ marginTop: "30px" }}
            >
              <a className="button" href="/register">
                {t.investNow}
              </a>

              <button
                className="button button-outline"
                onClick={() => setSelectedPlan(null)}
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

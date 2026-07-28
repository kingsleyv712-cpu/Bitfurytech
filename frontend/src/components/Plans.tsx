import { useState } from "react";

type PlansProps = {
  language: "en" | "fr";
};

const plans = {
  en: [
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
  ],

  fr: [],
};

export default function Plans({ language }: PlansProps) {
  const items = plans.en;

  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  return (
    <section className="section" id="plans">
      <div className="section-heading">
        <p className="eyebrow">Investment Plans</p>

        <h2>Diversify Your Investments With Confidence</h2>

        <p>
          Explore professionally managed investment opportunities across Real
          Estate, Stocks, Agriculture and Cryptocurrency.
        </p>
      </div>

      <div className="plans-grid">
        {items.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <img src={plan.image} alt={plan.title} />

            <h3>{plan.title}</h3>

            <p>{plan.subtitle}</p>

            <div className="plan-actions">
              <button
                className="button button-outline"
                onClick={() => setSelectedPlan(plan)}
              >
                Learn More
              </button>

              <a className="button" href="/register">
                Invest Now
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

            <h3>Overview</h3>

            <p>{selectedPlan.overview}</p>

            <h3 style={{ marginTop: "20px" }}>
              How BitfuryTech Generates Returns
            </h3>

            <p>{selectedPlan.income}</p>

            <h3 style={{ marginTop: "20px" }}>
              Benefits
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
                Invest Now
              </a>

              <button
                className="button button-outline"
                onClick={() => setSelectedPlan(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

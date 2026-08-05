import { useEffect, useRef } from "react";

type TradeReviewSectionProps = {
  language: "en" | "fr";
};

const copy = {
  en: {
    eyebrow: "Market Overview",
    title: "Global Financial Market Overview",
    body:
      "Stay informed with live financial market data covering global indices, cryptocurrencies, forex, and commodities. Our market overview helps investors monitor trends and make informed investment decisions.",
  },

  fr: {
    eyebrow: "Aperçu du marché",
    title: "Aperçu des marchés financiers mondiaux",
    body:
      "Restez informé grâce aux données financières en direct couvrant les indices mondiaux, les cryptomonnaies, le Forex et les matières premières. Notre aperçu du marché aide les investisseurs à suivre les tendances et à prendre des décisions éclairées.",
  },
};

export default function TradeReviewSection({
  language,
}: TradeReviewSectionProps) {
  const t = copy[language];

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: true,
      locale: language === "fr" ? "fr" : "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      width: "100%",
      height: "650",

      tabs: [
        {
          title: "Indices",
          symbols: [
            {
              s: "FOREXCOM:SPXUSD",
              d: "S&P 500",
            },
            {
              s: "FOREXCOM:NSXUSD",
              d: "Nasdaq 100",
            },
            {
              s: "FOREXCOM:DJI",
              d: "Dow Jones",
            },
          ],
        },

        {
          title: "Crypto",
          symbols: [
            {
              s: "BINANCE:BTCUSDT",
              d: "Bitcoin",
            },
            {
              s: "BINANCE:ETHUSDT",
              d: "Ethereum",
            },
            {
              s: "BINANCE:BNBUSDT",
              d: "BNB",
            },
            {
              s: "BINANCE:XRPUSDT",
              d: "XRP",
            },
          ],
        },

        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD" },
            { s: "FX:GBPUSD" },
            { s: "FX:USDJPY" },
          ],
        },

        {
          title: "Commodities",
          symbols: [
            {
              s: "TVC:GOLD",
              d: "Gold",
            },
            {
              s: "TVC:SILVER",
              d: "Silver",
            },
            {
              s: "TVC:USOIL",
              d: "Crude Oil",
            },
          ],
        },
      ],
    });

    container.current.appendChild(script);
  }, [language]);

  return (
    <section className="market-overview" id="insights">
      <div className="container">

        <div className="section-heading">
          <p className="eyebrow">{t.eyebrow}</p>

          <h2>{t.title}</h2>

          <p>{t.body}</p>
        </div>

        <div
          className="tradingview-widget-container"
          ref={container}
        ></div>

      </div>
    </section>
  );
}

type CompanyVideoSectionProps = {
  language: "en" | "fr";
};

const copy = {
  en: {
    eyebrow: "Company Media",
    title: "See how BitfuryTech builds value across global markets.",
    description:
      "Watch our official company presentation to learn more about our investment philosophy, services, and long-term vision.",
  },
  fr: {
    eyebrow: "Médias de l'entreprise",
    title: "Découvrez comment BitfuryTech crée de la valeur sur les marchés mondiaux.",
    description:
      "Regardez notre présentation officielle pour découvrir notre philosophie d'investissement, nos services et notre vision à long terme.",
  },
};

export default function CompanyVideoSection({
  language,
}: CompanyVideoSectionProps) {
  const t = copy[language];

  return (
    <section className="section" id="media">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      <div className="media-grid">
        <div className="media-card">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/QYE14pQ6NeQ"
            title="BitfuryTech Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

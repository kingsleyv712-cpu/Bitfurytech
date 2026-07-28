type PlanTierCardProps = {
  title: string;
  image: string;
  subtitle: string;
  onLearnMore: () => void;
};

export default function PlanTierCard({
  title,
  image,
  subtitle,
  onLearnMore,
}: PlanTierCardProps) {
  return (
    <article className="plan-card">
      <div className="plan-image-wrapper">
        <img
          src={image}
          alt={title}
          className="plan-image"
          loading="lazy"
        />
      </div>

      <div className="plan-content">
        <h3>{title}</h3>

        <p>{subtitle}</p>

        <div className="plan-actions">
          <button
            className="button button-outline"
            onClick={onLearnMore}
          >
            Learn More
          </button>

          <a href="/register" className="button">
            Invest Now
          </a>
        </div>
      </div>
    </article>
  );
}

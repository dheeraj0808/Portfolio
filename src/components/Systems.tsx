import { site } from "@/data/site";

export function Systems() {
  return (
    <section className="section section--tight" id="systems">
      <div className="container">
        <p className="eyebrow">How I build backends</p>
        <h2 className="h2">Systems over screenshots</h2>
        <p className="lead">
          Recruiters skim UI. Backend roles hire for boundaries, auth, money, and
          failure modes — here is what I focus on in production.
        </p>
        <div className="systems-grid">
          {site.systems.map((item, i) => (
            <article key={item.title} className="systems-card" style={{ animationDelay: `${i * 60}ms` }}>
              <span className="systems-card__index">0{i + 1}</span>
              <h3 className="h3">{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectCard({ title, description, img, tag, link }) {
  return (
    <article className="ProjectCard row br12 ">
      <img src={img} alt={title} width="266" height="400" />
      <div className="text col mt1 mb1 align-center justify-between">
        <h4>{title}</h4>
        <p className="mt1">{description}</p>
        {link ? (
          <a className="mt08" href={link} target="_blank" rel="noreferrer">
            Voir Github
          </a>
        ) : null}
        <div className="row tags gap05">
          {tag.map((t, idx) => (
            <span key={idx} className="tag pd05">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

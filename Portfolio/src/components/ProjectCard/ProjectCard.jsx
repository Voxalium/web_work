export default function ProjectCard({ title, description, img, link }) {
  return (
    <article className="ProjectCard row br12 ">
      <img src={img} alt={title} width="266" height="400" />
      <div className="text col mt3 align-center">
        <h3>{title}</h3>
        <p className="mt1">{description}</p>
        {link ? (
          <a className="mt08" href={link}>
            Voir Github
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectCard({ title, description, id }) {
  return (
    <article id={id} className="ProjectCard row bg-light br12 ">
      <img src="" alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

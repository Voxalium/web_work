export default function ProjectCard({
  title,
  description,
  img,
  tag,
  link,
  toggleModal,
  gallery,
}) {
  const handleClickModal = () => {
    toggleModal(gallery || []);
  };
  return (
    <article className="ProjectCard br12 ">
      <div onClick={handleClickModal} className="image pointer ">
        <img src={img} alt={title} width="266" height="400" />
        <span>Voir plus</span>
      </div>
      <div className="text col mt1 mb1 align-center justify-between">
        <h5>{title}</h5>
        <p className="mt1">{description}</p>
        {link ? (
          <a className="mt08 " href={link} target="_blank" rel="noreferrer">
            Voir Github
          </a>
        ) : null}
        <div className="row tags gap05 mt1">
          {tag.map((t, idx) => (
            <span key={idx} className="tag pd02">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

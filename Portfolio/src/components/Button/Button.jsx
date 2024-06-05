export default function Button({ text, img }) {
  return (
    <div className="btn-container col fullcenter">
      <button className="col hoverScale fullcenter button pd15">
        <img src={img} alt={`${text}-img`} />
      </button>
      <p className="mt1">{text}</p>
    </div>
  );
}

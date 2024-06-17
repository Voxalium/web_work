export default function Slider() {
  return (
    <div className="Slider">
      <img
        className="arrows leftArrow"
        src="arrowLeft.wepb"
        alt="fléche gauche"
      />

      <div className="gallery">
        {/*img.map((i, _) => (
          <img key={_} src={i} alt={`${i}-img`} />
        ))*/}
      </div>
      <img
        className="arrows rightArrow"
        src="arrowRight.wepb"
        alt="fléche droite"
      />
    </div>
  );
}

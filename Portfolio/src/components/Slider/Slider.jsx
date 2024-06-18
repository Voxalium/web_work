import { useState } from "react";

export default function Slider({ gallery }) {
  const [index, setIndex] = useState(0);

  const handleGalleryIndex = (i) => {
    let newIndex = index + i;
    if (newIndex < 0) {
      newIndex = gallery?.length - 1;
    } else if (newIndex >= gallery?.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  return (
    <div className="Slider ">
      <img
        onClick={() => handleGalleryIndex(-1)}
        className="arrows leftArrow pointer"
        src="/img/arrow-right.svg"
        alt="fléche gauche"
      />
      <div className="gallery row fullcenter">
        {<img src={gallery[index]} alt="img" />}
      </div>
      <img
        onClick={() => handleGalleryIndex(1)}
        className="arrows rightArrow pointer"
        src="/img/arrow-right.svg"
        alt="fléche droite"
      />
    </div>
  );
}

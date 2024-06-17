import Slider from "../Slider/Slider";
export default function Modal({ toggleModal }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="Modal col fullcenter" onClick={toggleModal}>
      <div className="container" onClick={handleModalContentClick}>
        <Slider />
        <img className="close" src="close" alt="close" onClick={toggleModal} />
      </div>
    </div>
  );
}

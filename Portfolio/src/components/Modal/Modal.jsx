import Slider from "../Slider/Slider";
export default function Modal({ toggleModal, gallery }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="Modal col fullcenter" onClick={toggleModal}>
      <div
        className="container animationSize"
        onClick={handleModalContentClick}
      >
        <Slider gallery={gallery} />
        <img
          className="close pointer"
          src="/img/close.svg"
          alt="close"
          onClick={toggleModal}
        />
      </div>
    </div>
  );
}

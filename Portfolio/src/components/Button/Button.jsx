function Button({ text }) {
  return (
    <div className="container col fullcenter">
      <button className="button pd15"></button>
      <p className="mt1">{text}</p>
    </div>
  );
}

export default Button;

function mouseAim(containerTag, innerTag) {
  const container = document.querySelector(containerTag);
  const inner = document.querySelector(innerTag);
  const constrain = 500;

  function transform(x, y, e) {
    let box = e.getBoundingClientRect();
    let calcX = -(y - box.y - box.height) / constrain;
    let calcY = (x - box.x - box.width) / constrain;

    return (
      "perspective(80px) " +
      "   rotateX(" +
      calcX +
      "deg) " +
      "   rotateY(" +
      calcY +
      "deg) "
    );
  }
  function transformElement(e, xyE) {
    e.style.transform = transform.apply(null, xyE);
  }

  container.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([inner]);

    window.requestAnimationFrame(function () {
      transformElement(inner, position);
    });
  };
}

export default mouseAim;

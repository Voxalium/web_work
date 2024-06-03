export default function scrollBar(bar, container) {
  const b = document.querySelector(bar);
  const c = document.querySelector(container);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = c;
    const scrollPercent =
      (scrollTop / (scrollHeight - clientHeight)) * 100 + "%";
    b.style.width = scrollPercent;
  };

  c.addEventListener("scroll", handleScroll);
  return () => {
    c.removeEventListener("scroll", handleScroll);
  };
}

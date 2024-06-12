import { useEffect, useState } from "react";
export default function ScrollBar() {
  const [width, setWidth] = useState();

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <div style={{ width: width + "%" }} className="ScrollBar"></div>;
}

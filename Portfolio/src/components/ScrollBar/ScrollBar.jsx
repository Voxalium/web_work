import { useEffect } from "react";
import scrollBar from "../../scripts/scrollBar";
export default function ScrollBar() {
  useEffect(() => {
    scrollBar(".ScrollBar", "main");
  }, []);
  return <div className="ScrollBar"></div>;
}

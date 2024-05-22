import { useEffect } from "react";
import mouseAim from "../../scripts/mouseAim";

function Home() {
  useEffect(() => {
    mouseAim(".Home", ".outer");
  });
  return (
    <div className="Home row fullcenter ">
      <div className="outer br12 col fullcenter">
        <div className="inner bg br12 pd15 col fullcenter">
          <h1>Bonjour!</h1>
          <div className="text textcenter mt1">
            Je suis Terence Truyens,
            <br /> j'utilise aussi le pseudo Voxalium.
            <br /> Je suis spécialisé dans le développement web frontend.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

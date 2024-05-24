import { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import mouseAim from "../../scripts/mouseAim";

function Home() {
  useEffect(() => {
    mouseAim(".Home", ".outer");
  });
  return (
    <div className="Home row fullcenter ">
      <HomeCard
        title="Bonjour"
        text={[
          "Je suis Terence Truyens,",
          "je suis spécialisé dans le développement Web",
        ]}
      ></HomeCard>
    </div>
  );
}

export default Home;

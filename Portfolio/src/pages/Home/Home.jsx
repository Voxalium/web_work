import { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import mouseAim from "../../scripts/mouseAim";

function Home() {
  useEffect(() => {
    mouseAim(".Home", ".outer");
  });
  return (
    <main className="Home col fullcenter animationFadeIn ">
      <h1 className="mb1 textcenter">Terence Truyens, développeur web</h1>

      <HomeCard
        title="Bonjour"
        text={[
          "Je suis spécialisé dans le développement web front-end (HTML, CSS, React).",
          "En 2023, j'ai suivi la formation Intégrateur web sur OpenClassrooms, ce qui m'a permis d'approfondir mes connaissances en développement Web.",
          "Durant cette formation, j'ai aussi appris à organiser des projets, à debugger des sites et faire des tests unitaires et fonctionnels avec JEST.",
        ]}
      />
    </main>
  );
}

export default Home;

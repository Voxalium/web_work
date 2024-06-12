import { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import mouseAim from "../../scripts/mouseAim";
import { transition } from "../../scripts/transition";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    mouseAim(".Home", ".outer");
  });
  return (
    <motion.main
      className="Home col fullcenter animationFadeIn "
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <h1 className="mb1">Terence Truyens, développeur web</h1>

      <HomeCard
        title="Bonjour"
        text={[
          "Je suis spécialisé dans le développement web front-end (HTML, CSS, React).",
          "En 2023, j'ai suivi la formation Intégrateur web sur OpenClassrooms, ce qui m'a permis d'approfondir mes connaissances en développement Web.",
          "Durant cette formation, j'ai aussi appris à organiser un projet avec les méthodes AGILE, à debugger des sites et faire des tests unitaires et fonctionnels avec JEST.",
        ]}
      />
    </motion.main>
  );
}

export default Home;

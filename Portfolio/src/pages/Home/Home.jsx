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
      className="Home row fullcenter "
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <HomeCard
        title="Bonjour"
        text={[
          "Je suis Terence Truyens,",
          "je suis spécialisé dans le développement Web",
        ]}
      ></HomeCard>
    </motion.main>
  );
}

export default Home;

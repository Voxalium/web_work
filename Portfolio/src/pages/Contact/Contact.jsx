import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";
import Button from "../../components/Button/Button";
const email = "/img/envelope-regular.webp";
const github = "/img/github.webp";
const linkedIn = "/img/linkedin.webp";
export default function Contact() {
  return (
    <motion.main
      className="Contact animationFadeIn col fullcenter"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <div className="container row pd15 br12 fullcenter gap15">
        <a href="mailto:terence.truyens@sfr.fr">
          <Button text="Mon Email" img={email} />
        </a>
        <a
          href="https://www.linkedin.com/in/terence-truyens-6283092b9"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="Mon LinkedIn" img={linkedIn} />
        </a>
        <a href="https://github.com/Voxalium" target="_blank" rel="noreferrer">
          <Button text="Mon Github" img={github} />
        </a>
      </div>
    </motion.main>
  );
}

import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";
const email = "/img/envelope-regular.webp";
const github = "/img/github.webp";
const linkedIn = "/img/linkedin.webp";
export default function Contact() {
  return (
    <motion.main
      className="Contact animationFadeIn"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <div className="container col fullheight fullcenter">
        <ul className="row gap15 pd15 br12">
          <li className="col fullcenter hoverScale">
            <a
              href="mailto:terence.truyens@sfr.fr"
              rel="noreferrer"
              target="_blank"
            >
              <img src={email} alt="email-logo" />
            </a>
            <p> Mon mail</p>
          </li>
          <li className="col fullcenter hoverScale">
            <a
              href="https://www.linkedin.com/in/terence-truyens-6283092b9"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedIn} alt="linkedIn-logo" />
            </a>
            <p> Mon LinkedIn</p>
          </li>
          <li className="col fullcenter hoverScale">
            <a
              href="https://github.com/Voxalium"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github-logo" />
            </a>
            <p> Mon Github</p>
          </li>
        </ul>
      </div>
    </motion.main>
  );
}

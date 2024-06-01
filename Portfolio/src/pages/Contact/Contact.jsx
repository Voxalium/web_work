import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";

export default function Contact() {
  return (
    <motion.main
      className="Contact animationFadeIn"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <div className="container col fullheight fullcenter">
        <ul>
          <li>
            <a
              href="mailto:terence.truyens@sfr.fr"
              rel="noreferrer"
              target="_blank"
            >
              Mon mail
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/terence-truyens-6283092b9"
              rel="noreferrer"
              target="_blank"
            >
              Mon LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Voxalium"
              rel="noreferrer"
              target="_blank"
            >
              Mon Github
            </a>
          </li>
        </ul>
      </div>
    </motion.main>
  );
}

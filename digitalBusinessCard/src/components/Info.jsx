import styles from "../components/Info.module.css";
import imageUrl from "../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <header>
      <img src={imageUrl} alt="Profile photo of Ibok Comfort Michael" />
      <h1>Ibok Comfort Michael</h1>
      <h2>Frontend developer</h2>
      <a
        href="#"
        target="_blank"
        rel="noopener referrer"
        className={styles.headerWeb}
      >
        comfortibok.website
      </a>
      <div aria-label="Contact options" className={styles.buttonWrap}>
        <a
          href="mailto:ibokcomfort@gmail.com"
          target="_blank"
          aria-label="Send an email to Ibok Comfort Michael"
          className={styles.emailBtn}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.btnIcon} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/comfort-ibok-a43042164"
          target="_blank"
          rel="noopener referrer"
          aria-label="Visit Comfort Ibok's LinkedIn profile page"
          className={styles.linkedInBtn}
        >
          <FontAwesomeIcon icon={faSquareLinkedin} className={styles.btnIcon} />
          Linkedin
        </a>
      </div>
    </header>
  );
}

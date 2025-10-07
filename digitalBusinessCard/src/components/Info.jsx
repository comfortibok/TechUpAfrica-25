import styles from "../components/Info.module.css";
import imageUrl from "../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <header>
      <img src={imageUrl} />
      <h1>Ibok Comfort Michael</h1>
      <h2>Frontend developer</h2>
      <p className={styles.headerWeb}>comfortibok.website</p>
      <div className={styles.buttonWrap}>
        <a href="mailto:ibokcomfort@gmail.com" className={styles.emailBtn}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.btnIcon} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/comfort-ibok-a43042164"
          className={styles.linkedInBtn}
        >
          <FontAwesomeIcon icon={faSquareLinkedin} className={styles.btnIcon} />
          Linkedin
        </a>
      </div>
    </header>
  );
}

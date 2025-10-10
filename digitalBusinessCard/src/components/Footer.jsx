import styles from "../components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer aria-labelledby="social-links">
      <h2 id="social-links" className={styles.visuallyHidden}>
        Social media links
      </h2>
      <a
        href="https://x.com/com4t_ibok"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Comfort Ibok on X"
      >
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          className={styles.footerIcon}
        />
        <span className={styles.visuallyHidden}>X (Twitter)</span>
      </a>

      <a
        href="https://facebook.com/comforti93"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Comfort Ibok on Facebook"
      >
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className={styles.footerIcon}
        />
        <span className={styles.visuallyHidden}>Facebook</span>
      </a>

      <a
        href="https://instagram.com/com4t_ibok"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Comfort Ibok on Instagram"
      >
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className={styles.footerIcon}
        />
        <span className={styles.visuallyHidden}>Instagram</span>
      </a>

      <a
        href="https://github.com/comfortibok"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Comfort Ibok's GitHub profile"
      >
        <FontAwesomeIcon icon={faSquareGithub} className={styles.footerIcon} />
        <span className={styles.visuallyHidden}>GitHub</span>
      </a>
    </footer>
  );
}

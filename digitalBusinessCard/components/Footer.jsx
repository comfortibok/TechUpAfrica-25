import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a href="mailto:ibokcomfort">
        <FontAwesomeIcon icon={faSquareXTwitter} className="footer-icon" />
      </a>

      <a href="">
        <FontAwesomeIcon icon={faSquareFacebook} className="footer-icon" />
      </a>

      <a href="">
        <FontAwesomeIcon icon={faSquareInstagram} className="footer-icon" />
      </a>

      <a href="https://github.com/comfortibok">
        <FontAwesomeIcon icon={faSquareGithub} className="footer-icon" />
      </a>
    </footer>
  );
}

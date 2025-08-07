import imageUrl from "../src/assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <header>
      <img src={imageUrl} />
      <h1>Ibok Comfort Michael</h1>
      <h2>Frontend developer</h2>
      <p>comfortibok.website</p>
      <div className="button-wrap">
        <a
          href="mailto:ibokcomfort@gmail.com"
          style={{
            border: "1px solid rgba(209, 213, 219, 1)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "rgba(55, 65, 81, 1)",
            padding: "9px 27px",
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "0.5em" }} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/comfort-ibok-a43042164"
          style={{
            border: "none",
            backgroundColor: "rgba(41, 127, 229, 1)",
            color: "rgba(255, 255, 255, 1)",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px",
            padding: "9px 18px",
          }}
        >
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            style={{ marginRight: "0.5em" }}
          />
          Linkedin
        </a>
      </div>
    </header>
  );
}

import styles from "../components/Interest.module.css";
export default function Interest() {
  return (
    <section
      aria-labelledby="interest-section"
      className={styles.interestDetails}
    >
      <h3 id="interest-section">Interests</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </section>
  );
}

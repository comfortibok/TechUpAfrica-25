import styles from "../components/Home.module.css"
export default function Home({ onStart }) {
  return (
    <section className={styles.homeSection}>
      <h1 className={styles.title}>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={onStart}>Start quiz</button>
    </section>
  );
}

export default function Home({ onStart }) {
  return (
    <section className="home-section">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={onStart}>Start quiz</button>
    </section>
  );
}

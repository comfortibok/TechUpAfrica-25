import styles from "../components/Questions.module.css";
import Option from "./OPtion";

export default function Result({
  questions,
  userAnswers,
  score,
  total,
  onRestart,
}) {
  return (
    <section className="quizSection">
      {questions.map((q) => (
        <div key={q.id} className={styles.question}>
          <p dangerouslySetInnerHTML={{ __html: q.question }} />
          <div className={styles.optionsSection}>
            {q.options.map((option, i) => (
              <Option
                key={i}
                option={option}
                correctAnswer={q.correctAnswer}
                userAnswer={userAnswers[q.id]}
                reviewMode={true}
              />
            ))}
          </div>
        </div>
      ))}

      <div className={styles.resultSection}>
        <h2>
          You scored {score}/{total} correct answers
        </h2>
        <button className="secondaryBtn" onClick={onRestart}>
          Play again
        </button>
      </div>
    </section>
  );
}

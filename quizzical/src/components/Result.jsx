import Option from "./OPtion";

export default function Result({
  questions,
  userAnswers,
  score,
  total,
  onRestart,
}) {
  return (
    <section className="quiz-section">
      {questions.map((q) => (
        <div key={q.id} className="question">
          <p dangerouslySetInnerHTML={{ __html: q.question }} />
          <div className="options-section">
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

      <div className="result-section">
        <h2>
          You scored {score}/{total} correct answers
        </h2>
        <button className="secondary-btn" onClick={onRestart}>
          Play again
        </button>
      </div>
    </section>
  );
}

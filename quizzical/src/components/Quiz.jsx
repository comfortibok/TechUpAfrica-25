import Questions from "./Questions";

export default function Quiz({ questions, userAnswers, onSelect, onSubmit }) {
  const allAnswered =
    questions.length > 0 &&
    Object.keys(userAnswers).length === questions.length;

  return (
    <section className="quiz-section">
      { questions.map((q) => (
        <Questions
          key={q.id}
          id={q.id}
          question={q.question}
          options={q.options}
          selected={userAnswers[q.id]}
          onSelect={onSelect}
        />
      ))}

      <button className="secondary-btn answer-btn" onClick={onSubmit} disabled={!allAnswered}>
        Check answers
      </button>
    </section>
  );
}

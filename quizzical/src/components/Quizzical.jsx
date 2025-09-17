import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q, i) => {
          const options = [...q.incorrect_answers, q.correct_answer].sort(
            () => Math.random() - 0.5
          );
          return {
            id: i,
            question: q.question,
            correctAnswer: q.correct_answer,
            options,
          };
        });
        setQuestions(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const startQuiz = () => {
    setUserAnswers({});
    setScore(0);
    navigate("/quiz");
  };

  const handleSelect = (questionId, selectedOption) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) newScore++;
    });
    setScore(newScore);
    navigate("/result");
  };

  const restart = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Home onStart={startQuiz} />} />
      <Route
        path="quiz"
        element={
          loading ? (
            <p>Loading questions...</p>
          ) : (
            <Quiz
              questions={questions}
              userAnswers={userAnswers}
              onSelect={handleSelect}
              onSubmit={handleSubmit}
            />
          )
        }
      />
      <Route
        path="result"
        element={
          <Result
            questions={questions}
            userAnswers={userAnswers}
            score={score}
            total={questions.length}
            onRestart={restart}
          />
        }
      />
    </Routes>
  );
}

import React, { useState } from 'react';
import questions from './data/questions';
import Question from './components/Questions';
import Score from './components/Score';
import './index.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>
      {!isFinished ? (
        <div>
          <Question
            questionData={questions[current]}
            selectedOption={selected}
            handleAnswer={handleAnswer}
          />
          <button onClick={handleNext} disabled={!selected}>
            Next
          </button>
        </div>
      ) : (
        <Score score={score} total={questions.length} />
      )}
    </div>
  );
}

export default App;

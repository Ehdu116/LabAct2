import React from 'react';

function Question({ questionData, selectedOption, handleAnswer }) {
  return (
    <div>
      <h2>{questionData.question}</h2>
      {questionData.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleAnswer(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Question;

import React from 'react';

function Score({ score, total }) {
  const percentage = ((score / total) * 100).toFixed(2);
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>You answered {score} out of {total} questions correctly.</p>
      <p>Your Score: {percentage}%</p>
    </div>
  );
}

export default Score;

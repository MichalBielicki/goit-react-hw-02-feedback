import React from "react";

function Statistics({ good, neutral, bad, total, percentageOfGoodFeedbacks }) {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Positive feedback : {percentageOfGoodFeedbacks}%</p>
    </div>
  );
}

export default Statistics;

import React from "react";
import style from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          type="button"
          data-action={option}
          onClick={onFeedback}
          className={style.button}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

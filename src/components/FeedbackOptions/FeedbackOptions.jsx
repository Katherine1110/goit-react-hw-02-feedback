import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          className={styles.button}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

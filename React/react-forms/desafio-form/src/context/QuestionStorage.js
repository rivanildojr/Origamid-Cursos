import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionStorage = ({ children }) => {
  const [answers, setAnswers] = useState(0);

  return (
    <QuestionContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuestionContext.Provider>
  );
};

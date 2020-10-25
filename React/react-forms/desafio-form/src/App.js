import React from "react";
import { QuestionStorage } from "./context/QuestionStorage";
import Question from "./components/Question";

function App() {
  return (
    <QuestionStorage>
      <Question />
    </QuestionStorage>
  );
}

export default App;

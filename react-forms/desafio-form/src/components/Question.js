import React, { useState, useContext, useEffect } from "react";

import Radio from "./Radio";
import questions from "../util/perguntas";

import { QuestionContext } from "../context/QuestionStorage";

const Question = () => {
  const [question, setQuestion] = useState(questions[0]);
  const [count, setCount] = useState(0);

  const [answers, setAnswers] = useState("");

  const answersContext = useContext(QuestionContext);

  useEffect(() => {
    if (questions[count] > questions.length) setQuestion(null);
    else setQuestion(questions[count]);
  }, [count]);

  function handleClick() {
    if (question) {
      if (answers === question.resposta) {
        answersContext.setAnswers((count) => count + 1);
      }
      setCount((count) => count + 1);
    }
  }

  return (
    <>
      {question && (
        <>
          <fieldset>
            <legend>{question.pergunta}</legend>
            <Radio
              options={question.options}
              value={answers}
              setValue={setAnswers}
            />
          </fieldset>
          <button onClick={handleClick}>Proximo</button>
        </>
      )}
      {!question && (
        <p>
          Você acertou: {answersContext.answers} de {questions.length}
        </p>
      )}
    </>
  );
};

export default Question;

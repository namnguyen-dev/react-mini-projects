import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random()*4)
  if(tempIndex===3){
    answers.push(correct_answer)
  }else{
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">correct answers : {correct}/{index}</p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} ></h2>
          <div className="btn-contaainer">
            {answers.map((answer, index)=> {
              return <button className="answer-btn" dangerouslySetInnerHTML={{__html: answer}} key={index} onClick={()=> checkAnswer(correct_answer === answer)}></button>
            } )}
          </div>
        </article>
        <button onClick={nextQuestion}className='next-question'>next question</button>
      </section>
    </main>
  );
}

export default App;

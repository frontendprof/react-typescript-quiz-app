import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from "./API";
import {Difficulty} from "./API";


const TOTAL_QUESTION=10;

const App=()=> {


  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState([]);
  const [number,setNumber]=useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const [score,setScore]=useState(0)
  const [gameOver,setGameOver]=useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTION,Difficulty.EASY))


  const triviaReq=async()=>{

  }

  const checkRes=(e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion=()=>{

  }

  return (

    <div className="App">
      <h1>React Quizz</h1>

      <button className="start" onClick={triviaReq}>Start</button>
      <p className="score">Score:</p>
      <p>Loading questions ...</p>

      {/* <QuestionCard
        questionNumber={number+1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].questions}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number] : undefined}
        callback={checkRes}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;

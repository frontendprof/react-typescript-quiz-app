import React from 'react';
import QuestionCard from './components/QuestionCard';



const App=()=> {


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

      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;

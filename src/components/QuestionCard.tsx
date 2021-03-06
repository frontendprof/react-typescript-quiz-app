
import React from 'react';

import {AnswerObject} from "../App";

// Styles
import {Wrapper,ButtonWrapper} from "./QuestionCard.styles";




type Props={
    question:string,
    answers:string[],
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void,
    userAnswer:AnswerObject | undefined,
    questionNumber:number,
    totalQuestions:number
}

const QuestionCard:React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return (
        <Wrapper>
           <p className="number">
               Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html:question }} />

            <div>
                {answers.map(ans=>(
                    <ButtonWrapper 
                        correct={userAnswer?.correctAnswer===ans}
                        userClicked={userAnswer?.answer===ans}
                        key={ans}
                    >
                        <button disabled={userAnswer?true:false} value={ans} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html:ans }} />
                        </button>
                    </ButtonWrapper>
                ))}
                    
                    
            </div>
        </Wrapper>
    )
}

export default QuestionCard

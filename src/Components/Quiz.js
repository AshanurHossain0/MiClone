import React, { useState } from 'react'
import  {QuizData}  from '../Data/QuizData.js'
const Quiz = () => {
    const [currQ,setCurrQ]=useState(1)
    console.log(QuizData[1]);
    function changeQ(){
        if(currQ<QuizData.length){
            setCurrQ(currQ+1)
        }
    }
    return (
        <div>
            <p className="heading-txt">Play Quiz</p>
            <div className="container">
                <div className="question">
                    <span id="question-number">{currQ}.</span>
                    <span id="question-text">{QuizData[currQ-1].question}</span>
                </div>
                <div className="option-container">
                    {QuizData[currQ-1].options.map((option, idx) => {
                        return (
                            <button className="option" key={idx}>
                                {option}
                            </button>
                        )
                    })}
                </div>
                <input type="button" value="next" id="next-button" onClick={changeQ}></input>
            </div>
        </div>
    )
}

export default Quiz
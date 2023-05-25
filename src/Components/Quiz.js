import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData.js'
import Result from './Result.js'
import "../App.css"
const Quiz = () => {
    const [currQ, setCurrQ] = useState(1)
    const [score, setScore] = useState(0);
    const [option, setOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    function changeNQ() {
        updateScore();
        if (currQ < QuizData.length) {
            setCurrQ(currQ + 1)
            setOption(0)
        }
        else {
            setShowResult(true);
        }
    }
    function updateScore() {
        if (option === QuizData[currQ - 1].answer) {
            setScore(score + 1)
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrQ(1);
        setOption(0);
        setScore(0);
    }
    return (
        <div className='main-container'>
            <p className="heading-txt">Play Quiz</p>
            <div className="container">
                {(showResult) ? (<Result  score={score} totalScore={QuizData.length} tryAgain={resetAll} />) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currQ}.</span>
                            <span id="question-text">{QuizData[currQ - 1].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currQ - 1].options.map((option, idx) => {
                                return (
                                    <button
                                        className={`option-btn ${option === idx + 1 ? "checked" : null
                                            }`}
                                        key={idx} onClick={() => { setOption(idx + 1) }}>
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="next" id="next-button" onClick={changeNQ}></input>
                    </>)}
            </div>
        </div>
    )
}

export default Quiz
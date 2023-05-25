import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
        Your Score: <span className="scr">{props.score}</span> <br/>
        Total Score: <span className="scr">{props.totalScore}</span>
    </div>
    <button id="play-again" onClick={props.tryAgain}>Play Again</button>
    </>
  )
}

export default Result
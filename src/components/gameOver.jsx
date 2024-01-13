import './style/gameOver.css'

function GameOver({rePlay, nextLevel, finalScore, win, loss, quit }) {
    return (
        <div className="game-over">
            {win && 
                <div className="win-screen">
                    <h1>You Win!</h1>
                    <img className='gif' src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" alt="" />
                    <p>Your final score is <span className='span'>{finalScore}</span></p>
                    <div className="btns-win">
                        <button onClick={nextLevel}>KEEP PLAYING</button>
                        <button onClick={rePlay}>PLAY AGAIN</button>
                        <button onClick={quit}>QUIT</button>
                    </div>
                </div>}
            {loss && 
                <div className="loss-screen">
                    <h1>Game Over!</h1>
                        <img className='gif' src="https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif" alt="" />
                        <p>Your final score is <span className='span'>{finalScore}</span></p>
                        <div className="btns">
                        <button onClick={rePlay}>TRY AGAIN</button>
                        <button onClick={quit}>QUIT</button>
                    </div>
                </div>}
        </div>
     );
}
export default GameOver;
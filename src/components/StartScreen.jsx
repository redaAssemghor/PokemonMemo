import { useState } from "react";
import './style/startScreen.css'

function StartScreen({getMode}) {
    const [easy, setEasy] = useState(false);
    const [hard, setHard] = useState(false);
    const [medium, setMedium] = useState(false);

    const handleClickEasy = () => {
        setEasy(true)
        setMedium(false)
        setHard(false)
    }
    const handleClickMedium = () => {
        setMedium(true)
        setEasy(false)
        setHard(false)
    }
    const handleClickHard = () => {
        setHard(true)
        setEasy(false)
        setMedium(false)
    }

    const handelChoise = (e) => {
        e.preventDefault()
        if (easy) {
            getMode(4)
        }
        else if(medium) {
            getMode(8)
        }
        else if (hard) {
            getMode(12)
        }
    }

    return ( 
        <div className="container">
            <div className="bg-img"></div>
            <div className="start">
                <div className="">
                    <p>What would you like to do?</p>
                    <form onSubmit={handelChoise}>
                        <label>
                            <input
                                type="radio"
                                name="answer"
                                onChange={() => handleClickEasy()}
                            />
                            <span>Easy</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="answer"
                                onChange={() => handleClickMedium()}
                            />
                            <span>Medium</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="answer"
                                onChange={() => handleClickHard()}
                            />
                            <span>Hard</span>
                        </label>
                        <button>START GAME</button>
                    </form>
                    <a href="">GITHUB REPO</a>
                </div>
            </div>
        </div>
     );
}

export default StartScreen;
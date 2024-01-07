import { useState } from "react";
import './style/startScreen.css'

function StartScreen({getMode}) {
    const handleClickEasy = () => {
        getMode(5)
    }
    const handleClickHard = () => {
        getMode(10)
    }
    const handleClickMedium = () => {
        getMode(8)
    }

    return ( 
        <div className="container">
            <div className="start">
                <p>lats play a game!</p>
                <ul>
                    <li onClick={handleClickEasy}>Easy</li>
                    <li onClick={handleClickMedium}>Medium</li>
                    <li onClick={handleClickHard}>Hard</li>
                </ul>
                <div className="start-btns">
                    <a onClick={handleClickEasy}>START GAME</a>
                    <a href="">GITHUB REPO</a>
                </div>
            </div>
        </div>
     );
}

export default StartScreen;
import { useState } from "react";

function StartScreen({getMode}) {
    const handleClickEasy = () => {
        getMode(4)
    }
    const handleClickHard = () => {
        getMode(8)
    }

    return ( 
        <div className="">
            <p>lats play a game!</p>
            <button onClick={handleClickEasy}>easy mode</button>
            <button onClick={handleClickHard}>hard mode</button>
        </div>
     );
}

export default StartScreen;
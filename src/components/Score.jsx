import { useEffect, useState } from "react";

function Score({num, high}) {
    const [score, setScore] = useState(null)

    useEffect(() => {
        setScore(num)
    },[num])

    return (
        <div className="">
            <p>Score: 
                <span>{score}</span>
            </p>

            <p>High Score: 
                <span>{high}</span>
            </p>
        </div>
     );
}

export default Score;
function LostScreen({startOver}) {
    return ( 
        <div className="">
            <p>You Lost!</p>
            <button onClick={startOver}>Try again</button>
        </div>
     );
}

export default LostScreen;
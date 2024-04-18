import { useState } from "react";

function FunctionCounter() {
    const [counter, setCounter] = useState(0);

    const increament = ()=> {
        setCounter(counter+1);
    }

    const decreament = ()=> {
        setCounter(counter-1);
    }

    return <div>
        <div> Counter : {counter} </div>
        <button onClick={increament}> Increament</button>
        <button onClick={decreament}> Decreament</button>
    </div>
}

export default FunctionCounter;
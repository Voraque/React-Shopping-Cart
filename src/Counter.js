import React, { useState } from "react";
import './Counter.css';

function Counter({ step = 1 }) {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + step);
    return (
        <div className="Counter">
            <span>{count}</span>
            <button onClick={incrementCount}>+{step}</button>
        </div>
    )
}

export default Counter;
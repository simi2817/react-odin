import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => ++prev);
    };

    const decrement = () => {
        setCounter((prev) => --prev);
    };

    return (
        <div>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={decrement}>Down</button>
            <button onClick={increment}>Up</button>
        </div>
    );
}
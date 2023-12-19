import { useState } from "react";
import Memo from './Memo';

const IncButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <Memo onClick={handleClick}>Click me!</Memo>
        </div>
    );
}

export default IncButton;
/* eslint-disable react/display-name */
import { memo } from "react";

const Memo = memo(({ children, onClick }) => {
    let i = 0;
    let j = 0;
    const ITERATION_COUNT = 10_000;
    while (i < ITERATION_COUNT) {
        while (j < ITERATION_COUNT) {
            j += 1;
        }
        i += 1;
        j = 0;
    }

    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
});

export default Memo;
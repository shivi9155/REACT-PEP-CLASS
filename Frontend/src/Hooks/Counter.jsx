import { useContext } from "react";
import { CounterContext } from "../context/Counter.jsx";

const Counter = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
};

export default Counter;

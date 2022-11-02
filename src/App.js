import React from "react";
import './index.scss';

function App() {
    const [count, setCount] = React.useState(0);

    const onClickPlus = () => {
        setCount(count + 1);
    };

    const onClickMinus = () => {
        setCount(count - 1);
    };

    return (
        <div className="App">
            <div>
                <h2>Counter:</h2>
                <h1>0</h1>
                <button onClick={onClickPlus} className="minus">- Minus</button>
                <button onClick={onClickMinus} className="plus">Plus +</button>
            </div>
        </div>
    );
}

export default App;

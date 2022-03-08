import { useDispatch, useSelector } from "react-redux";

import { increaseCount, decreaseCount } from "./actions/counter";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state?.counter);
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-center flex-column">
          <h1>Redux</h1>
          <div className="flex-center flex-column">
            <button className="btn" onClick={() => dispatch(increaseCount())}>
              Increment
            </button>
            <span>{count}</span>
            <button className="btn" onClick={() => dispatch(decreaseCount())}>
              Decrement
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

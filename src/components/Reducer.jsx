import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("unexpected action");
  }
}

const initialState = {
  count: 0,
  theme: "light",
};

// menggunakan useReducer, ketika punya beberapa data state, kemudian ingin ditaruh didalam satu state saja
function Reducer() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+</button>
      <br />
      <p>Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>ToggleTheme</button>
    </>
  );
}

export default Reducer;

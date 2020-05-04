import React from "react";
import "./App.css";
import { TextField } from "./TextField";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "Joe", lastName: "Wang" }}
        handleChange={(e) => console.log(e.target.value)}
      />
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;

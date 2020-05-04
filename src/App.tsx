import React from "react";
import "./App.css";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "Joe", lastName: "Wang" }}
        handleChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default App;

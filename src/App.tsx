import React from "react";
import "./App.css";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" person={{ firstName: "Joe", lastName: "Wang" }} />
    </div>
  );
};

export default App;

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import CustomizedBreadcrumbs from "./components/navBar";
import Counters from "./components/counters";
import React, { useState } from "react";

const counters1 = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
];
function App() {
  const [count, setCount] = useState({ counters1 });
  const deecrement = (asd) => {
    console.log(asd);
    let jjj = count.counters1.map((i) => {
      if (i.id === asd.id) {
        return { ...i, value: asd.value - 1 };
      }
      return i;
    });
    setCount({ counters1: jjj });
  };
  const increment = (asd) => {
    console.log(asd);
    let jjj = count.counters1.map((i) => {
      if (i.id === asd.id) {
        return { ...i, value: asd.value + 1 };
      }
      return i;
    });
    setCount({ counters1: jjj });
  };
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  });
  const handleIncrement = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setState({ counters });
  };
  const handleDelete = (counterId) => {
    const counters = state.counters.filter((i) => i.id !== counterId);
    setState({ counters });
  };
  const handleReset = () => {
    var counters = [];
    for (var i = 1; i < 5; i++) {
      var obj = {};
      obj["id"] = i;
      obj["value"] = 0;
      counters.push(obj);
    }
    setState({ counters });
  };

  return (
    <React.Fragment>
      <CustomizedBreadcrumbs
        totalCounter={
          state.counters.reduce((a, b) => ({ value: a.value + b.value })).value
        }
      />
      <CssBaseline />
      <Container fixed>
        {count.counters1.map((counterss) => (
          <div key={counterss.id} counter1={counterss}>
            <button onClick={() => deecrement(counterss)}>-</button>
            <span>{counterss.value}</span>
            <button onClick={() => increment(counterss)}>+</button>
          </div>
        ))}

        <Counters
          counters={state.counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;

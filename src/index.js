import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import Button from "./components/Button/Button";
import "./styles.css";

import theme from "./components/theme";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ThemeProvider theme={theme}>
        <Button background="#000">Test</Button>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, {useState} from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {ColorModeThemeProvider, UiMode} from "@linka-cloud/theme"
import {Router} from "./Router";

import "./Pages"

const App = () => {
  const [mode, setMode] = useState<UiMode>("light")
  return (
    <ColorModeThemeProvider mode={mode} setMode={setMode}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ColorModeThemeProvider>
  );
}

export default App;

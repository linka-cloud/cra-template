import {createTheme, ThemeProvider} from "@mui/material";
import React from 'react';
import './App.css';

import "./Pages"
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";

const theme = createTheme({})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

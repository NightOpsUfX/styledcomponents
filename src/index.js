import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Consolas; 
  }
`

const theme = {
    colors: {
        primary: "green",
        secondary: "red",
    },
    media: {
      phone: "(max-width: 425px)",
      tablet: "(max-width: 768px) and (min-width: 425px)",
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Global/>
          <App />
      </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

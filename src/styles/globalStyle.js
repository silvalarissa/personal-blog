import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    background: #1c1e25;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  }

  h1, h2, h3, h4, p, body {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`

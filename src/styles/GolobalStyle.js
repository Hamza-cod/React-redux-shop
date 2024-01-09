import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lemon&family=Roboto+Condensed:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
*{
  margin: 0;
  padding: 0;
}
a{
  all: unset;
  cursor: pointer;
}
body{
font-family: 'Lemon', serif;
font-family: 'Roboto', sans-serif;
font-family: 'Roboto Condensed', sans-serif;
}
`
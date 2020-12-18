import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Open Sans Condensed', sans-serif;
 
    padding: 20px 60px; 


    background: #e0e9e6;
    background: -moz-linear-gradient(top,  #e0e9e6 37%, #ffece1 68%);
    background: -webkit-linear-gradient(top,  #e0e9e6 37%,#ffece1 68%); 
    background: linear-gradient(to bottom,  #e0e9e6 37%,#ffece1 68%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e9e6', endColorstr='#ffece1',GradientType=0 ); 
    background-repeat: no-repeat;
    background-size: 100% 150%;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

`
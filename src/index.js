import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components' // estilo global para a aplicação
import { BrowserRouter, Routes, Route } from "react-router-dom" // browserRouter tipo navigation
import Header from './componentes/Header';
import Home from './rotas/Home';
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none; //tirando pontuação de todo elemento li do html
  }

`
// Browser Router tipo a Div, objeto pai
//Routes objeto que indica que haverá Rotas a partir dali
//Route que indica uma rota
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    {/* colocando um cabeçalho fixo em todas as páginas */}
      <Routes>
        <Route path="/favoritos" element={<Favoritos />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

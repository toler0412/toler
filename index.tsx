
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Iniciando carregamento do React...");

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Remove o loader após o React assumir o controle
  setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, 1000);
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("DOM pronto. Iniciando ReactDOM...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Pequeno atraso para garantir que o primeiro frame do React foi desenhado
    requestAnimationFrame(() => {
      setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }
      }, 500);
    });
    
    console.log("React montado com sucesso.");
  } catch (error) {
    console.error("Erro ao renderizar:", error);
    throw error;
  }
} else {
  console.error("Elemento root não encontrado!");
}

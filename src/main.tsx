
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");

function mountApp() {
  try {
    console.log("[main] Anwendung wird gestartet");
    
    const rootElement = document.getElementById("root");
    
    if (rootElement) {
      console.log("[main] Root-Element gefunden, React-App wird gerendert");
      
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log("[main] React-App erfolgreich gerendert");
      
      // Loading-Indikator entfernen
      setTimeout(() => {
        document.body.classList.add('app-loaded');
      }, 100);
      
    } else {
      console.error("[main] Root-Element nicht gefunden!");
      showErrorPage("Root-Element nicht gefunden");
    }
  } catch (error) {
    console.error("[main] Fehler beim Rendern der React-App:", error);
    showErrorPage(error instanceof Error ? error.message : String(error));
  }
}

function showErrorPage(errorMessage: string) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px; padding: 20px;">
        <h1>Ladefehler</h1>
        <p>Die Anwendung konnte nicht geladen werden.</p>
        <p><strong>Fehler:</strong> ${errorMessage}</p>
        <button onclick="window.location.reload()" style="background: #1e40af; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px;">Neu laden</button>
      </div>
    `;
  }
}

// App sofort laden
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// Fehlerhandler
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[main] Unhandled Promise Rejection:', event.reason);
  event.preventDefault();
});

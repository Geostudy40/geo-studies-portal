
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Verbesserte Fehlerbehandlung mit detailliertem Logging
document.addEventListener('DOMContentLoaded', () => {
  console.log("[main] DOM vollständig geladen");
  mountApp();
});

function mountApp() {
  try {
    console.log("[main] Anwendung wird initialisiert");
    console.log("[main] Document ready state:", document.readyState);
    console.log("[main] Basis-URL:", document.baseURI);
    console.log("[main] Aktuelle URL:", window.location.href);
    
    const rootElement = document.getElementById("root");
    
    if (rootElement) {
      console.log("[main] Root-Element gefunden, React-App wird gerendert");
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log("[main] React-App erfolgreich gerendert");
    } else {
      console.error("[main] Root-Element nicht gefunden! DOM-Struktur:", document.body.innerHTML);
      showErrorPage("Root-Element nicht gefunden");
    }
  } catch (error) {
    console.error("[main] Kritischer Fehler beim Rendern der React-App:", error);
    showErrorPage(error instanceof Error ? error.message : String(error));
  }
}

function showErrorPage(errorMessage: string) {
  document.body.innerHTML = `
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>Es ist ein Fehler aufgetreten</h1>
      <p>Bitte versuchen Sie, die Seite neu zu laden oder kontaktieren Sie den Support.</p>
      <pre style="text-align: left; background: #f8f8f8; padding: 20px; border-radius: 5px; max-width: 800px; margin: 20px auto; overflow: auto;">${errorMessage}</pre>
    </div>
  `;
}

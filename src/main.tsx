
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");
console.log("[main] Current URL:", window.location.href);
console.log("[main] Pathname:", window.location.pathname);
console.log("[main] Hostname:", window.location.hostname);

function mountApp() {
  try {
    console.log("[main] App wird gestartet");
    
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("[main] Root-Element nicht gefunden!");
      showErrorPage("Root-Element nicht gefunden");
      return;
    }

    console.log("[main] Root-Element gefunden, React wird gerendert");
    
    const root = createRoot(rootElement);
    
    root.render(<App />);
    console.log("[main] React-App erfolgreich gerendert");
    
    // Loading-Indikator entfernen
    setTimeout(() => {
      document.body.classList.add('app-loaded');
      console.log("[main] App als geladen markiert");
    }, 100);
    
  } catch (error) {
    console.error("[main] Fehler beim Initialisieren:", error);
    showErrorPage(error instanceof Error ? error.message : String(error));
  }
}

function showErrorPage(errorMessage: string) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const homeUrl = window.location.hostname.includes('lovable') ? '/' : '/geo-studies-portal/';
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px; padding: 20px;">
        <h1 style="color: #dc2626;">Ladefehler</h1>
        <p>Die GeoStudys-Anwendung konnte nicht geladen werden.</p>
        <p style="background: #fef2f2; padding: 15px; border-radius: 4px;"><strong>Fehler:</strong> ${errorMessage}</p>
        <button onclick="window.location.reload()" style="background: #1e40af; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer; margin: 10px;">Neu laden</button>
        <button onclick="window.location.href='${homeUrl}'" style="background: #059669; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer;">Zur Startseite</button>
      </div>
    `;
    document.body.classList.add('app-loaded');
  }
}

// App sofort laden
mountApp();

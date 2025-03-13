
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Verbesserte Fehlerbehandlung mit detailliertem Logging
document.addEventListener('DOMContentLoaded', () => {
  console.log("[main] DOM vollständig geladen");
  console.log("[main] Page URL:", window.location.href);
  console.log("[main] Base URL:", document.baseURI);
  console.log("[main] Base Element:", document.querySelector('base')?.href || "Keine Base gefunden");
  mountApp();
});

// Zusätzliche Fehlererkennung für spätes Laden
window.addEventListener('load', () => {
  console.log("[main] Fenster vollständig geladen, alle Ressourcen verfügbar");
  const rootContent = document.getElementById("root")?.innerHTML || "";
  
  if (rootContent.trim() === "") {
    console.warn("[main] Root-Element ist leer nach vollständigem Laden");
    setTimeout(() => {
      if (document.getElementById("root")?.innerHTML.trim() === "") {
        console.error("[main] Root-Element bleibt leer nach 1s, versuche erneut zu rendern");
        mountApp();
      }
    }, 1000);
  }
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
      // Prüfen, ob wir auf GitHub Pages sind und den entsprechenden Pfad setzen
      window.isGitHubPages = window.location.hostname.includes('github.io');
      window.basePath = window.isGitHubPages ? "/geo-studies-portal" : "/geo-studies-portal";
      console.log("[main] BasePath gesetzt:", window.basePath);
      
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
      <p>URL: ${window.location.href}</p>
      <p>Zeitpunkt: ${new Date().toISOString()}</p>
      <pre style="text-align: left; background: #f8f8f8; padding: 20px; border-radius: 5px; max-width: 800px; margin: 20px auto; overflow: auto;">${errorMessage}</pre>
      <button onclick="window.location.reload()" style="background: #282c34; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px;">Seite neu laden</button>
    </div>
  `;
}

// Globalen Fehlerhandler hinzufügen
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', event.error || event.message);
  
  // Prüfen, ob die App bereits gerendert wurde
  const rootElement = document.getElementById("root");
  if (rootElement && rootElement.children.length === 0) {
    showErrorPage(`Globaler Fehler: ${event.message} bei ${event.filename}:${event.lineno}:${event.colno}`);
  }
});

// Declare global variables for TypeScript
declare global {
  interface Window {
    isGitHubPages?: boolean;
    basePath?: string;
  }
}

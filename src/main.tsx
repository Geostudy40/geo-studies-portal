
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");

let appMounted = false;

function mountApp() {
  if (appMounted) {
    console.log("[main] App bereits gemountet, überspringe");
    return;
  }

  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("[main] Root-Element nicht gefunden!");
      showErrorPage("Root-Element nicht gefunden");
      return;
    }

    console.log("[main] Root-Element gefunden, React-App wird gerendert");
    
    const root = createRoot(rootElement);
    root.render(<App />);
    
    appMounted = true;
    console.log("[main] React-App erfolgreich gerendert");
    
    // Verstecke Loading-Indicator
    hideInitialLoading();
    
  } catch (error) {
    console.error("[main] Fehler beim Rendern:", error);
    showErrorPage(error instanceof Error ? error.message : String(error));
  }
}

function hideInitialLoading() {
  const loadingElement = document.querySelector('.initial-loading') as HTMLElement;
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}

function showErrorPage(errorMessage: string) {
  hideInitialLoading();
  
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px; padding: 20px; max-width: 600px; margin-left: auto; margin-right: auto;">
        <h1 style="color: #1e40af; margin-bottom: 20px;">Ladefehler</h1>
        <p style="margin-bottom: 10px;">Die Anwendung konnte nicht geladen werden.</p>
        <p style="margin-bottom: 20px; color: #666;"><strong>Fehler:</strong> ${errorMessage}</p>
        <button onclick="window.location.reload()" style="background: #1e40af; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; margin-right: 10px;">Neu laden</button>
        <button onclick="window.location.href = window.location.origin" style="background: #666; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Startseite</button>
      </div>
    `;
  }
}

// Vereinfachte App-Loading-Logik
function initializeApp() {
  console.log("[main] App-Initialisierung gestartet");
  console.log("[main] Document readyState:", document.readyState);
  
  // Warte bis DOM bereit ist
  if (document.readyState === 'loading') {
    console.log("[main] Warte auf DOMContentLoaded...");
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(mountApp, 100);
    });
  } else {
    console.log("[main] DOM bereits geladen, starte Mount-Prozess");
    setTimeout(mountApp, 100);
  }
}

// Globale Fehlerhandler
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[main] Unhandled Promise Rejection:', event.reason);
});

// Starte die App-Initialisierung
initializeApp();

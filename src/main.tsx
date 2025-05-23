import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");

let appMounted = false;
let mountAttempts = 0;
const MAX_MOUNT_ATTEMPTS = 3;

function mountApp() {
  if (appMounted) {
    console.log("[main] App bereits gemountet, überspringe");
    return;
  }

  mountAttempts++;
  console.log(`[main] Mount-Versuch ${mountAttempts}/${MAX_MOUNT_ATTEMPTS}`);

  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("[main] Root-Element nicht gefunden!");
      if (mountAttempts < MAX_MOUNT_ATTEMPTS) {
        setTimeout(mountApp, 1000);
      } else {
        showErrorPage("Root-Element nicht gefunden nach mehreren Versuchen");
      }
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
    console.error(`[main] Fehler beim Rendern (Versuch ${mountAttempts}):`, error);
    
    if (mountAttempts < MAX_MOUNT_ATTEMPTS) {
      console.log("[main] Wiederhole Mount-Versuch in 1 Sekunde...");
      setTimeout(mountApp, 1000);
    } else {
      showErrorPage(error instanceof Error ? error.message : String(error));
    }
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
        <button onclick="window.location.href = window.location.origin + window.location.pathname" style="background: #666; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Startseite</button>
        <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 6px; text-align: left;">
          <strong>Mögliche Lösungen:</strong>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Browser-Cache leeren (Strg+F5)</li>
            <li>JavaScript aktivieren</li>
            <li>Anderer Browser verwenden</li>
            <li>Seite in einigen Minuten erneut versuchen</li>
          </ul>
        </div>
      </div>
    `;
  }
}

// Verbesserte App-Loading-Logik mit mehreren Fallbacks
function initializeApp() {
  console.log("[main] App-Initialisierung gestartet");
  console.log("[main] Document readyState:", document.readyState);
  
  if (document.readyState === 'loading') {
    console.log("[main] Warte auf DOMContentLoaded...");
    document.addEventListener('DOMContentLoaded', mountApp);
  } else {
    console.log("[main] DOM bereits geladen, starte Mount-Prozess");
    // Kleine Verzögerung um sicherzustellen, dass alle Ressourcen geladen sind
    setTimeout(mountApp, 50);
  }
}

// Verbesserte Fehlerhandler
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[main] Unhandled Promise Rejection:', event.reason);
  event.preventDefault();
});

// Debugging-Informationen
console.log('[main] Browser-Info:', {
  userAgent: navigator.userAgent,
  url: window.location.href,
  readyState: document.readyState,
  timestamp: new Date().toISOString()
});

// Starte die App-Initialisierung
initializeApp();

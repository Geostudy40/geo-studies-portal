
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
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px; padding: 20px; max-width: 600px; margin-left: auto; margin-right: auto;">
        <h1 style="color: #1e40af; margin-bottom: 20px;">Ladefehler</h1>
        <p style="margin-bottom: 10px;">Die Anwendung konnte nicht geladen werden.</p>
        <p style="margin-bottom: 20px; color: #666;"><strong>Fehler:</strong> ${errorMessage}</p>
        <button onclick="window.location.reload()" style="background: #1e40af; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Neu laden</button>
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

// Verbesserte App-Loading-Logik
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  // Kleine Verzögerung um sicherzustellen, dass alle Ressourcen geladen sind
  setTimeout(mountApp, 10);
}

// Verbesserte Fehlerhandler
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', event.error);
  console.error('[main] Fehler-Details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[main] Unhandled Promise Rejection:', event.reason);
  event.preventDefault();
});

// Zusätzliche Debugging-Informationen
console.log('[main] Browser-Info:', {
  userAgent: navigator.userAgent,
  url: window.location.href,
  readyState: document.readyState
});

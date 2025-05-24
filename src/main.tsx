
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");

function mountApp() {
  try {
    console.log("[main] App wird gestartet");
    
    const rootElement = document.getElementById("root");
    
    if (rootElement) {
      console.log("[main] Root-Element gefunden, React-App wird gerendert");
      
      const root = createRoot(rootElement);
      root.render(<App />);
      
      console.log("[main] React-App erfolgreich gerendert");
      
      // Loading-Indikator sofort entfernen
      document.body.classList.add('app-loaded');
      
    } else {
      console.error("[main] Root-Element nicht gefunden!");
      showErrorPage("Root-Element nicht gefunden");
    }
  } catch (error) {
    console.error("[main] Fehler beim Initialisieren der App:", error);
    showErrorPage(error instanceof Error ? error.message : String(error));
  }
}

function showErrorPage(errorMessage: string) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px; padding: 20px; max-width: 600px; margin-left: auto; margin-right: auto;">
        <h1 style="color: #dc2626; margin-bottom: 20px;">Ladefehler</h1>
        <p style="margin-bottom: 15px;">Die GeoStudys-Anwendung konnte nicht geladen werden.</p>
        <p style="margin-bottom: 20px; padding: 15px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 4px;"><strong>Fehler:</strong> ${errorMessage}</p>
        <div style="margin-top: 30px;">
          <button onclick="window.location.reload()" style="background: #1e40af; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer; margin-right: 10px; font-size: 16px;">Neu laden</button>
          <button onclick="window.location.href='/geo-studies-portal/'" style="background: #059669; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer; font-size: 16px;">Zur Startseite</button>
        </div>
      </div>
    `;
    document.body.classList.add('app-loaded');
  }
}

// Fehlerhandler registrieren
window.addEventListener('error', (event) => {
  console.error('[main] JavaScript-Fehler:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[main] Unhandled Promise Rejection:', event.reason);
  event.preventDefault();
});

// App laden
console.log("[main] App wird gemountet");
mountApp();

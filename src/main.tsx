
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
      
      // Fehlerbehandlung für React-Rendering
      try {
        root.render(<App />);
        console.log("[main] React-App erfolgreich gerendert");
        
        // Loading-Indikator sofort entfernen nach erfolgreichem Rendering
        document.body.classList.add('app-loaded');
        
        // Zusätzliche Überprüfung nach kurzer Verzögerung
        setTimeout(() => {
          const appContent = document.querySelector('#root > *');
          if (appContent) {
            console.log("[main] App-Inhalt erfolgreich geladen");
            document.body.classList.add('app-loaded');
          } else {
            console.warn("[main] App-Inhalt nicht gefunden, aber kein Fehler aufgetreten");
          }
        }, 100);
        
      } catch (renderError) {
        console.error("[main] Fehler beim React-Rendering:", renderError);
        showErrorPage("React-Rendering-Fehler: " + (renderError instanceof Error ? renderError.message : String(renderError)));
      }
      
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
        <p style="margin-top: 20px; font-size: 14px; color: #666;">Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Support.</p>
      </div>
    `;
    // Sicherstellen, dass der Loading-Indikator entfernt wird
    document.body.classList.add('app-loaded');
  }
}

// Fehlerhandler vor dem App-Start registrieren
window.addEventListener('error', (event) => {
  console.error('[main] Globaler JavaScript-Fehler:', event.error);
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

// App sofort laden
console.log("[main] Startet App-Mount-Prozess");
mountApp();

// Backup-Timer für den Fall, dass die App nicht lädt
setTimeout(() => {
  const rootElement = document.getElementById("root");
  const hasAppContent = rootElement && rootElement.children.length > 0;
  const hasLoadingClass = document.body.classList.contains('app-loaded');
  
  if (!hasAppContent || !hasLoadingClass) {
    console.error('[main] App nicht ordnungsgemäß geladen nach 3 Sekunden');
    console.error('[main] Debug-Info:', {
      hasRootElement: !!rootElement,
      hasAppContent: hasAppContent,
      hasLoadingClass: hasLoadingClass,
      childrenCount: rootElement?.children.length || 0
    });
    
    showErrorPage("Timeout: App konnte nicht innerhalb von 3 Sekunden geladen werden");
  } else {
    console.log('[main] App erfolgreich geladen und bereit');
  }
}, 3000);

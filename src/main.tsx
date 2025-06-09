
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("[main] Initialisierung gestartet");
console.log("[main] Current URL:", window.location.href);

function mountApp() {
  try {
    console.log("[main] App wird gestartet");
    
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("[main] Root-Element nicht gefunden!");
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
  }
}

// App sofort laden
mountApp();

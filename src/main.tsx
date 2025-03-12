
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Verbesserte Fehlerbehandlung
try {
  console.log("Anwendung wird initialisiert");
  console.log("Document ready state:", document.readyState);
  console.log("Basis-URL:", document.baseURI);
  
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    console.log("Root-Element gefunden, React-App wird gerendert");
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React-App erfolgreich gerendert");
  } else {
    console.error("Root-Element nicht gefunden! DOM-Struktur:", document.body.innerHTML);
  }
} catch (error) {
  console.error("Kritischer Fehler beim Rendern der React-App:", error);
  // Fallback-Anzeige bei kritischen Fehlern
  document.body.innerHTML = `
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>Es ist ein Fehler aufgetreten</h1>
      <p>Bitte versuchen Sie, die Seite neu zu laden oder kontaktieren Sie den Support.</p>
      <pre style="text-align: left; background: #f8f8f8; padding: 20px; border-radius: 5px; max-width: 800px; margin: 20px auto; overflow: auto;">${error}</pre>
    </div>
  `;
}

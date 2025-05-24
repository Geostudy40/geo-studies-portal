
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log("[main] DOM vollständig geladen");
  
  // Basispath aus der Umgebungsvariable lesen
  const basePath = import.meta.env.MODE === 'production' 
    ? (import.meta.env.VITE_PUBLIC_BASE || '/') 
    : '/';
  window.basePath = basePath;
  
  // Stelle sicher, dass ein base-Element vorhanden ist
  let baseElement = document.querySelector('base');
  if (!baseElement) {
    baseElement = document.createElement('base');
    document.head.appendChild(baseElement);
  }
  baseElement.href = basePath;
  
  // Verhindere Weißblitzen vor dem Rendering
  document.body.style.backgroundColor = '#f8f8f8';
  document.documentElement.style.backgroundColor = '#f8f8f8';
  
  console.log("[main] BasePath einheitlich gesetzt auf:", basePath);
  console.log("[main] Base-Element href:", baseElement.href);
  
  mountApp();
});

function mountApp() {
  try {
    const rootElement = document.getElementById("root");
    
    if (rootElement) {
      console.log("[main] Root-Element gefunden, React-App wird gerendert");
      
      // Stelle sicher, dass das Root-Element keine unerwünschten Stile hat
      rootElement.style.opacity = '1';
      rootElement.style.transition = 'opacity 0.3s ease';
      
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log("[main] React-App erfolgreich gerendert");
    } else {
      console.error("[main] Root-Element nicht gefunden!");
    }
  } catch (error) {
    console.error("[main] Kritischer Fehler beim Rendern der React-App:", error);
  }
}

// Verhindere weiße Blitze bei Navigation
window.addEventListener('popstate', () => {
  document.body.style.opacity = '0.9';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Globalen Fehlerhandler hinzufügen
window.addEventListener('error', (event) => {
  console.error('[main] Globaler Fehler:', event.error || event.message);
});

// Declare global variables for TypeScript
declare global {
  interface Window {
    isGitHubPages?: boolean;
    basePath?: string;
  }
}

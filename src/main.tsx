
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure the DOM is mounted correctly
createRoot(document.getElementById("root")!).render(<App />);

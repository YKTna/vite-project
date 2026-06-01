import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Элемент с id 'root' не найден");
}

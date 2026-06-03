import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store/store.tsx'
import { Provider } from 'react-redux'

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
} else {
  console.error("Элемент с id 'root' не найден");
}

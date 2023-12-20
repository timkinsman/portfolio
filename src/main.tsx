import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { globalStyles } from '@nayhoo/components';

globalStyles();

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

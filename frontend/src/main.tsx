import { createRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './services/store';
import 'styles/fonts/Jost/stylesheet.css';
import 'styles/global.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Provider>,
);


import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { store } from "./redux/Store.js";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Provider store={store}>
    <App />
    </Provider>
     <Toaster/>
    </BrowserRouter>

)

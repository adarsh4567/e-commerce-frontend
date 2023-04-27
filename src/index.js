import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore';

const persistStorage = persistStore(store)


export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <PersistGate loading={null} persistor={persistStorage}>
    <App />
    </PersistGate>
  </QueryClientProvider>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital

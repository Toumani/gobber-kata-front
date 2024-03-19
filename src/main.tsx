import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from 'react-hot-toast';
import { MyGlobalContextProvider } from "./global-context.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <MyGlobalContextProvider>
        <App />
        <Toaster />
      </MyGlobalContextProvider>
    </NextUIProvider>
  </React.StrictMode>,
)

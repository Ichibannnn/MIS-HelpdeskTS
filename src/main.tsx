import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { ThemeModeProvider } from "./context/ThemeContext.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeModeProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ThemeModeProvider>
    </Provider>
  </StrictMode>,
);

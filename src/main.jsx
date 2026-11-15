import { createRoot } from "react-dom/client";
import { I18nProvider } from "./i18n";
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <I18nProvider>
    <App />
    <Analytics />
  </I18nProvider>,
);

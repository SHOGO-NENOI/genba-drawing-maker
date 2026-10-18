import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { App } from "./app/App";
import "./styles.css";

registerSW({ immediate: true });

const root = document.getElementById("root");

if (!root) {
  throw new Error("アプリの起動に必要な要素が見つかりません。");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["app-icon.svg"],
      manifest: {
        name: "現場図面メーカー",
        short_name: "現場図面",
        description: "現場写真に施工範囲や寸法を書き込み、面積付き図面を作成します。",
        theme_color: "#143d2b",
        background_color: "#f4f1e8",
        display: "standalone",
        start_url: "/",
        lang: "ja",
        orientation: "any",
        icons: [
          {
            src: "app-icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        navigateFallback: "index.html",
        globPatterns: ["**/*.{js,css,html,svg,woff2}"]
      },
      devOptions: { enabled: true }
    })
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    css: true
  }
});

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/genba-drawing-maker/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "現場図面メーカー",
        short_name: "現場図面",
        description: "写真から面積付きの現場図面を作成するアプリ",
        theme_color: "#173f35",
        background_color: "#f3f1e8",
        display: "standalone",
        orientation: "any",
        lang: "ja",
        start_url: "/genba-drawing-maker/",
        scope: "/genba-drawing-maker/",
        icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }]
      },
      workbox: {
        navigateFallback: "index.html",
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"]
      }
    })
  ],
  test: {
    include: ["src/**/*.test.ts"]
  }
});

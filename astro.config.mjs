// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mixpanel from "astrojs-mixpanel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mixpanel({
      token: "775617e6058bf5526f1e61e8eb2c172f",
      config: {
        track_pageview: false,
        persistence: "localStorage",
        batch_requests: true,
        debug: process.env.NODE_ENV === "development",
      },
      autoTrack: true, // Enable automatic page view tracking
      globalProperties: {
        app_version: "1.01",
        environment: process.env.NODE_ENV,
      },
    }),
  ],
});

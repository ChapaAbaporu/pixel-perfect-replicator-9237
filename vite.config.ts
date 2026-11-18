
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/pixel-perfect-replicator-9237/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});

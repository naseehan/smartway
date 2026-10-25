import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // react() compiles JSX; tsconfigPaths() makes the "@/..." imports work in tests
  plugins: [react(), tsconfigPaths()],
  test: {
    // jsdom is a fake browser, so components can render without opening Chrome
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});

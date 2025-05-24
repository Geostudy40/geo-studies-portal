
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isProd = mode === 'production';
  
  return {
    base: isProd ? env.VITE_PUBLIC_BASE : '/',
    server: {
      host: "::",
      port: 8080,
      open: mode === 'development' ? '/' : false
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: 'terser',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            icons: ['lucide-react']
          }
        }
      }
    }
  };
});

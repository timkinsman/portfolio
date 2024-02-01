import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePluginRadar } from 'vite-plugin-radar';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: { id: env.VITE_ANALYTICS_ID },
        // Google Tag Manager (multiple tag can be set with an array)
        gtm: [{ id: env.VITE_GTM_ID }],
      }),
    ],
    server: {
      open: true,
      port: Number(env.VITE_PORT) || 3000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});

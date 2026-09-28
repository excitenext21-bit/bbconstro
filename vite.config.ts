import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html;
        let newHtml = html;
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (fileName.endsWith('.css') && chunk.type === 'asset') {
            const cssContent = typeof chunk.source === 'string' ? chunk.source : chunk.source.toString();
            const baseName = path.basename(fileName);
            const linkRegex = new RegExp(`<link[^>]*href="[^"]*${baseName}"[^>]*>`, 'g');
            if (linkRegex.test(newHtml)) {
              newHtml = newHtml.replace(linkRegex, `<style>${cssContent}</style>`);
              delete bundle[fileName];
            }
          }
        }
        return newHtml;
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), inlineCss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react';
              }
              if (id.includes('motion')) {
                return 'vendor-motion';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-lucide';
              }
              return 'vendor-libs';
            }
          },
        },
      },
    },
  };
});

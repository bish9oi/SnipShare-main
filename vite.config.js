// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// import monacoEditorPlugin from 'vite-plugin-monaco-editor';
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(), monacoEditorPlugin],
//   optimizeDeps: {
//     include: [
//       'monaco-editor/esm/vs/editor/editor.main.js',
//       'monaco-editor/esm/vs/editor/editor.api.js',
//     ],
//   },
// })





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    monacoEditorPlugin, // <-- THIS MUST HAVE PARENTHESES
  ],
})
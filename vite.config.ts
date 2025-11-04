import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: 'index.html',
          crawlLinks: true,
          retryCount: 3
        }
      },
      router: {
        generatedRouteTree: './routeTree.gen.ts',
        virtualRouteConfig: './src/routes.ts'
      }
    }),
    viteReact()
  ]
})

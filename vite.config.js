import { resolve } from "path";

export default {
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalog: resolve(__dirname, 'catalog/index.html'),
        header: resolve(__dirname, 'src/components/header/header.html')
      }
    }
  }
}

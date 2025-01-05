import { fileURLToPath, URL } from 'node:url'; // Убедись, что импорт правильный
import { defineConfig } from 'vite'; // Импорт из Vite
import vue from '@vitejs/plugin-vue'; // Подключение Vue-плагина

export default defineConfig({
  base: '/', // Укажи относительный путь, например '/app/' для подкаталогов
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist', // Папка для продакшен сборки
    sourcemap: false, // Убрать карты исходного кода для уменьшения размера
    cssCodeSplit: true, // Разделение CSS по частям
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'], // Вынести зависимости в отдельный файл
        },
      },
    },
  },
  server: {
    host: '0.0.0.0', // Доступ с внешних IP для разработки
    port: 3334,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Настройка пути для alias
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Устранение предупреждений зависимостей
      },
    },
  },
});

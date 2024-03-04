import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, './src/components'),
            '@Views': path.resolve(__dirname, './src/views'),
            '@Router': path.resolve(__dirname, './src/router'),
            '@Hooks': path.resolve(__dirname, './src/hooks'),
            '@Interfaces': path.resolve(__dirname, './src/interfaces'),
            '@Constants': path.resolve(__dirname, './src/constants'),
            '@Utils': path.resolve(__dirname, './src/utils'),
            '@Assets': path.resolve(__dirname, './src/assets'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});

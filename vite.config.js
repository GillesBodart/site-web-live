import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import EnvironmentPlugin from 'vite-plugin-environment'


export default defineConfig({
    plugins: [
        vue(), EnvironmentPlugin(['BE_URL']),
    ],
})
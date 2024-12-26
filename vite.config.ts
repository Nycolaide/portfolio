import { mytril } from 'mytril/vite';
import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit(), mytril()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});

import { mytril } from 'mytril/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit(), mytril()],
	define: {
		'process.env': process.env
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

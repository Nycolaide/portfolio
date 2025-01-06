import { writable } from 'svelte/store';

interface NpmPackage {
	downloads: number;
	end: string;
	package: string;
	start: string;
}

export const repositoryMytril = writable<NpmPackage | null>(null);

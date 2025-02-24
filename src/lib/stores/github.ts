import type { Github } from '$lib/types';
import { writable } from 'svelte/store';

export const heroGitHub = writable<Github | null>(null);
export const minedelveGitHub = writable<Github | null>(null);

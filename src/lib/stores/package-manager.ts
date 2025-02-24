import type { NpmCounter } from '$lib/types';
import { writable } from 'svelte/store';

export const packageMytril = writable<NpmCounter | null>(null);

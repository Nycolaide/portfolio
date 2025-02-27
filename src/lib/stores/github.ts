import type { GitHubOrganization, GitHubUser } from '$lib/types';
import { writable } from 'svelte/store';

export const heroGitHub = writable<GitHubUser | null>(null);
export const minedelveGitHub = writable<GitHubOrganization | null>(null);

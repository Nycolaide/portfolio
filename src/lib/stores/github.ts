import { writable } from 'svelte/store';

interface GitHubProfile {
	name: string;
	bio: string;
	avatar_url: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export const githubProfile = writable<GitHubProfile | null>(null);

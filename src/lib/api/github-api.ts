import { githubMinedelve, githubProfile } from '$lib/stores/github';

export const fetchGitHubProfile = async () => {
	try {
		const response = await fetch('/api/github');
		if (!response.ok) {
			throw new Error('Failed to fetch GitHub profile');
		}

		const data = await response.json();
		githubProfile.set(data);
	} catch (error) {
		console.error((error as Error).message);
		githubProfile.set(null);
	}
};

export const fetchGitHubMinedelve = async () => {
	try {
		const response = await fetch(`/api/github/org?organisation=${encodeURIComponent('minedelve')}`);
		if (!response.ok) {
			throw new Error('Failed to fetch GitHub organisation');
		}

		const data = await response.json();
		githubMinedelve.set(data);
	} catch (error) {
		console.error((error as Error).message);
		githubMinedelve.set(null);
	}
};

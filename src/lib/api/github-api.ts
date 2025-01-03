import { githubProfile } from '$lib/stores/github';

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

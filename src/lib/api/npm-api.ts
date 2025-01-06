import { repositoryMytril } from '$lib/stores/npm';

export const fetchNpmMytril = async () => {
	try {
		const response = await fetch(`/api/npm?name=${encodeURIComponent('mytril')}`);
		if (!response.ok) {
			throw new Error('Failed to fetch GitHub Repo Mytril');
		}

		const data = await response.json();
		repositoryMytril.set(data);
	} catch (error) {
		console.error((error as Error).message);
		repositoryMytril.set(null);
	}
};

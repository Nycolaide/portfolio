import type { GitHubOrganization, GitHubUser, NpmCounter } from '$lib/types';

export const storage = (props: {
	hero?: GitHubUser;
	github?: { [key: string]: GitHubOrganization };
	npm?: { [key: string]: NpmCounter };
}) => {
	const { hero, github, npm } = props;
	const history = localStorage.getItem('storage') || null;
	const historyParsed = history && JSON.parse(history);

	const newData: {
		[key: string]: GitHubUser | { [key: string]: GitHubOrganization | NpmCounter };
	} = {};

	if (history) {
		if (historyParsed['hero']) newData['hero'] = historyParsed['hero'] || {};
		if (historyParsed['github']) newData['github'] = historyParsed['github'] || {};
		if (historyParsed['npm']) newData['npm'] = historyParsed['npm'] || {};
	}

	if (hero) newData['hero'] = hero || {};

	if (github) {
		for (const [key, value] of Object.entries(github)) {
			newData['github'] = { ...newData.github, [key]: value || {} };
		}
	}

	if (npm) {
		for (const [key, value] of Object.entries(npm)) {
			newData['npm'] = { ...newData.package, [key]: value || {} };
		}
	}

	localStorage.setItem('storage', JSON.stringify(newData));
};

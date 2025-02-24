import type { GitHubOrganization, GitHubUser, NpmCounter } from '$lib/types';

export const storage = (props: {
	hero?: { data: GitHubUser };
	github?: { [key: string]: { data: GitHubOrganization } };
	npm?: { [key: string]: { data: NpmCounter } };
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

	if (hero) newData['hero'] = hero.data || {};

	if (github) {
		for (const [key, value] of Object.entries(github)) {
			newData['github'] = { ...newData.github, [key]: value.data || {} };
		}
	}

	if (npm) {
		for (const [key, value] of Object.entries(npm)) {
			newData['npm'] = { ...newData.package, [key]: value.data || {} };
		}
	}

	localStorage.setItem('storage', JSON.stringify(newData));
};

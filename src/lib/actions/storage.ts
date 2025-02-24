export const storage = (props: { hero?: any; github?: any; npm?: any }) => {
	const { hero, github, npm } = props;
	const history = localStorage.getItem('storage') || null;
	const historyParsed = history && JSON.parse(history);

	let newData: { [key: string]: any } = {};

	if (history) {
		if (historyParsed['hero']) newData['hero'] = historyParsed['hero'] || {};
		if (historyParsed['github']) newData['github'] = historyParsed['github'] || {};
		if (historyParsed['npm']) newData['npm'] = historyParsed['npm'] || {};
	}

	if (hero) newData['hero'] = hero.data || {};

	if (github) {
		for (const [key, value] of Object.entries(github)) {
			newData['github'] = { ...newData.github, [key]: value };
		}
	}

	if (npm) {
		for (const [key, value] of Object.entries(npm)) {
			newData['npm'] = { ...newData.package, [key]: value };
		}
	}

	localStorage.setItem('storage', JSON.stringify(newData));
};

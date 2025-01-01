import type { RequestHandler } from './$types';

// Import the JSON data
import jsonLanguages from '$lib/data/languages.json';
import jsonCMS from '$lib/data/cms.json';
import jsonGames from '$lib/data/games.json';
import jsonOS from '$lib/data/os.json';

export const GET: RequestHandler = async ({ url }) => {
	const propsParam = url.searchParams.get('skill');
	const propsParams = url.searchParams.getAll('skill');

	const keys: string[] =
		propsParams.length === 1 ? (propsParam ? [propsParam] : []) : propsParams.filter(Boolean);

	let data = [...jsonLanguages, ...jsonCMS, ...jsonGames, ...jsonOS];
	if (keys.length > 0) {
		data = data.filter((item) =>
			keys.some((key) => item.name.toLowerCase().includes(key.toLowerCase()))
		);
	}

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
};

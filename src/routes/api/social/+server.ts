import type { RequestHandler } from './$types';
import json from '$lib/data/socials.json';

export const GET: RequestHandler = async ({ url }) => {
	const propsParam = url.searchParams.get('name');
	const propsParams = url.searchParams.getAll('name');

	const keys: string[] =
		propsParams.length === 1 ? (propsParam ? [propsParam] : []) : propsParams.filter(Boolean);

	let data = json;
	if (keys.length > 0) {
		data = data.filter((social) =>
			keys.some((key) => social.name.toLowerCase().includes(key.toLowerCase()))
		);
	}

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
};

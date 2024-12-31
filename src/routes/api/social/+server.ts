import type { RequestHandler } from './$types';
import data from '$lib/data/socials.json';

// export const GET: RequestHandler = async () => {
// 	const users = data;
// 	return new Response(JSON.stringify(users), {
// 		headers: { 'Content-Type': 'application/json' }
// 	});
// };

export const GET: RequestHandler = async ({ url }) => {
	const name = url.searchParams.get('name');

	let users = data;
	if (name) {
		users = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
	}

	return new Response(JSON.stringify(users), {
		headers: { 'Content-Type': 'application/json' }
	});
};

import type { RequestHandler } from './$types';
import json from '$lib/data/socials.json';

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify(json), {
		headers: { 'Content-Type': 'application/json' }
	});
};

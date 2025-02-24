import { callApi } from '$lib/actions/call-api';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
	const session = cookies.get('user-call-api');
	let useLocalData: boolean = false;

	if (!session) useLocalData = true;

	if (!useLocalData) {
		const hero = await callApi({ url: '/api/github' }, fetch);
		const minedelve = await callApi(
			{ url: `/api/github/org?organisation=${encodeURIComponent('minedelve')}` },
			fetch
		);
		const mytril = await callApi({ url: `/api/npm?name=${encodeURIComponent('mytril')}` }, fetch);

		if (!session) {
			cookies.set('user-call-api', 'yes', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: true,
				maxAge: 60 * 60 * 6
			});
		}

		return {
			useLocalData,
			api: { hero: hero, github: { minedelve: minedelve }, npm: { mytril: mytril } }
		};
	} else {
		return { useLocalData };
	}
};

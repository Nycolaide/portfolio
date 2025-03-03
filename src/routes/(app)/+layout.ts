import { callApi } from '$lib/actions/call-api';
import { storage } from '$lib/actions/storage';
import type { ResponseAllApi } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data }) => {
	const { session, consentMode } = data;
	let response = {};

	if (!session) {
		const hero = await callApi({ url: '/api/github' }, fetch);
		const minedelve = await callApi(
			{ url: `/api/github/org?organisation=${encodeURIComponent('minedelve')}` },
			fetch
		);
		const mytril = await callApi({ url: `/api/npm?name=${encodeURIComponent('mytril')}` }, fetch);

		const api = {
			hero: hero.data,
			github: { minedelve: minedelve.data },
			npm: { mytril: mytril.data }
		};
		response = api;

		if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			storage(api as any);
		}
	} else {
		if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
			const dataStorage = localStorage.getItem('storage') || null;
			response = (dataStorage && JSON.parse(dataStorage)) || {};
		}
	}

	return {
		api: response as ResponseAllApi,
		cookie: {
			consentMode,
			session
		}
	};
};

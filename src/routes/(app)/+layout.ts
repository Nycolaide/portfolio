import { callApi } from '$lib/actions/call-api';
import { storage } from '$lib/actions/storage';
import type { ResponseAllApi, SocialPlatform } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, fetch }) => {
	const { useLocalData, api } = data;
	let response = {};

	// local API
	const skills = await callApi({ url: '/api/skills' }, fetch);
	const projects = await callApi({ url: 'api/projects' }, fetch);
	const social = await callApi({ url: 'api/social' }, fetch);

	if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
		if (useLocalData) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			storage({ ...api } as any);
		} else {
			const dataStorage = localStorage.getItem('storage') || null;
			response = (dataStorage && JSON.parse(dataStorage)) || {};
		}
	}

	return {
		api: response as ResponseAllApi,
		skills: skills.data,
		projects: projects.data,
		social: social.data as SocialPlatform[]
	};
};

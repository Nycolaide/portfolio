import { buildUrlApi } from '$lib/helpers';
import { writable } from 'svelte/store';
import json from '$lib/assets/constant/hero.json';

export const socials = writable({
	data: [],
	loading: true
});

export const fetchSocials = async (): Promise<void> => {
	const params = { name: json.socials.map((social) => social.name) };

	socials.set({
		data: [],
		loading: true
	});

	try {
		const response = await fetch(buildUrlApi('/api/social', params));
		let data = await response.json();

		data = data.map((item: { name: string; url?: string }) => {
			const index = json.socials.findIndex((social) => social.name === item.name);
			return {
				...item,
				...json.socials[index]
			};
		});

		socials.set({
			data: data,
			loading: false
		});
	} catch (error) {
		console.error('Fail to call social list', error);
		socials.set({
			data: [],
			loading: false
		});
	}
};

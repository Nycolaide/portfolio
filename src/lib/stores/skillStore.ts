import { buildUrlApi } from '$lib/helpers';
import { writable } from 'svelte/store';
import json from '$lib/assets/constant/hero.json';

export const skills = writable({
	data: [],
	loading: true
});

export type SkillCategory = 'dev' | 'tools';

interface Skill {
	name: string;
	url?: string;
}

export const fetchSkills = async (category: SkillCategory | null): Promise<void> => {
	if (category === null) return;

	const params = { name: json.skills[category].map((x: { name: string }) => x.name) };

	skills.set({
		data: [],
		loading: true
	});

	try {
		const response = await fetch(buildUrlApi('/api/skill', params));
		let data = await response.json();

		data = data
			.map((item: Skill) => {
				const index = json.skills[category].findIndex((x: Skill) => x.name === item.name);
				if (index !== -1) {
					return {
						...item,
						...json.skills[category][index]
					};
				}
			})
			.filter((item: Skill | undefined): item is Skill => item !== undefined);

		skills.set({
			data: data,
			loading: false
		});
	} catch (error) {
		console.error('Fail to call skill list', error);
		skills.set({
			data: [],
			loading: false
		});
	}
};

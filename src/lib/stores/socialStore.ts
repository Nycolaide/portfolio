import { writable } from 'svelte/store';

export const userStore = writable([]);
export const socialHeader = writable({
	data: [],
	loading: true
});

export const fetchUsers = async (): Promise<void> => {
	try {
		const response = await fetch('/api/social');
		const data = await response.json();
		userStore.set(data);
	} catch (error) {
		console.error('Erreur lors du chargement des utilisateurs :', error);
	}
};

export const fetchSocials = async (): Promise<void> => {
	try {
		const response = await fetch('/api/social');
		const data = await response.json();
		socialHeader.set({
			data: data,
			loading: false
		});
	} catch (error) {
		console.error('Fail to call social list', error);
		socialHeader.set({
			data: [],
			loading: false
		});
	}
};

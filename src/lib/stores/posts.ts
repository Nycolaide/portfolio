import { writable } from 'svelte/store';
import jsonData from '$lib/data/articles.json';

interface Post {
	id: number;
	title: string;
	description: string;
	date: string;
	author: string;
	cover: string;
	slug: string;
}

export const posts = writable<Post[]>([]);

function parseDate(dateString: string): Date {
	const [month, day, year] = dateString.split('/').map(Number);
	return new Date(year, month - 1, day);
}

function sortPostsByDate(posts: Post[]): Post[] {
	return posts.sort((a, b) => {
		const dateA = parseDate(a.date);
		const dateB = parseDate(b.date);
		return dateB.getTime() - dateA.getTime();
	});
}

posts.set(sortPostsByDate(jsonData));

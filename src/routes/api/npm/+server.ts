import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
	const name = url.searchParams.get('name');
	if (!name) return json({ error: 'Name parameter is required' }, { status: 400 });

	const date = new Date().toISOString().split('T')[0];

	try {
		const response = await fetch(
			`https://api.npmjs.org/downloads/point/2023-04-15:${date}/${name}`
		);

		if (!response.ok) throw new Error(`node package manager API error: ${response.statusText}`);

		const data = await response.json();
		return json(data);
	} catch (error) {
		return json({ error: (error as Error).message }, { status: 500 });
	}
}

import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
	const organisation = url.searchParams.get('organisation');
	if (!organisation) return json({ error: 'organisation parameter is required' }, { status: 400 });

	try {
		const response = await fetch(`https://api.github.com/orgs/${organisation}`, {
			headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
		});

		if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`);

		const data = await response.json();
		return json(data);
	} catch (error) {
		return json({ error: (error as Error).message }, { status: 500 });
	}
}

export const callApi = async ({ url }: { url: string }, fetchFn = fetch) => {
	try {
		const res = await fetchFn(url);

		if (!res.ok) throw new Error(`Failed to fetch data on ${url}`);
		const data = await res.json();

		return { data };
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error message:', error.message);
			return { data: [], error: error.message };
		} else {
			console.error('Caught unexpected error', error);
			return { data: [], error: 'An unexpected error occurred' };
		}
	}
};

import { page } from '$app/state';
import { goto } from '$app/navigation';

export const setRouteParams = (key: string, params: string) => {
	const currentUrl = new URL(page.url);
	currentUrl.searchParams.set(key, params);
	goto(currentUrl.toString(), { replaceState: true });
};

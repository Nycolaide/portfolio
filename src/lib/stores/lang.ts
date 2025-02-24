import { translate } from '$lib/locales/i18n';
import { translations } from '$lib/locales/translations';

import { derived, writable } from 'svelte/store';

export const locale = writable('en');
export const locales = Object.keys(translations);

export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);

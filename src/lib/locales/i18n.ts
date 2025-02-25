import { translations } from './translations';

export const translate = (
	locale: string,
	key: string,
	vars: Record<string, string> = {}
): string => {
	if (!locale || !translations[locale]) {
		console.warn(`no translation for key "${key}", locale "${locale}"`);
		return key;
	}

	if (!key) {
		console.warn('no key provided to $t()');
		return key;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getNestedTranslation = (keys: string[], obj: Record<string, any>): string | undefined => {
		return keys.reduce((acc, currentKey) => {
			if (acc && typeof acc === 'object' && currentKey in acc) {
				return acc[currentKey];
			}
			return undefined;
		}, obj) as unknown as string | undefined;
	};

	const keys = key.split('.');
	let text = getNestedTranslation(keys, translations[locale]);
	if (text === undefined) {
		text = getNestedTranslation(keys, translations[locale]['common']);
	}
	if (text === undefined) {
		text = getNestedTranslation(keys, translations['fr']);
	}
	if (text === undefined) {
		text = getNestedTranslation(keys, translations['fr']['common']);
	}

	if (!text) {
		console.warn(`no translation found for ${locale}.${key}`);
		return key;
	}

	if (typeof text !== 'string') {
		console.warn(`key "${key}" is not valid for "${locale}".`);
		return key;
	}

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text!.replace(regex, vars[k]);
	});

	return text;
};

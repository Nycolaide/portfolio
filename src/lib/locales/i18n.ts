import { translations } from './translations';

export const translate = (
	locale: string,
	key: string,
	vars: Record<string, string> = {}
): string => {
	if (!locale || !translations[locale]) {
		throw new Error(`no translation for key "${key}", locale "${locale}"`);
	}

	if (!key) throw new Error('no key provided to $t()');

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
		text = getNestedTranslation(keys, translations['en']);
	}
	if (text === undefined) {
		text = getNestedTranslation(keys, translations['en']['common']);
	}

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	if (typeof text !== 'string') throw new Error(`key "${key}" is not valid for "${locale}".`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text!.replace(regex, vars[k]);
	});

	return text;
};

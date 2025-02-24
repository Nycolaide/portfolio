import type { Translations } from '$lib/types';

import commonEN from './en/common.json';
import commonFR from './fr/common.json';

import heroEn from './en/hero.json';
import heroFr from './fr/hero.json';

export const translations: Translations = {
	en: { common: commonEN, hero: heroEn },
	fr: { common: commonFR, hero: heroFr }
};

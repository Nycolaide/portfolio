import type { Translations } from '$lib/types';

import commonFR from './fr/common.json';
import heroFr from './fr/hero.json';
import analyticsFr from './fr/analytics.json';

export const translations: Translations = {
	fr: { common: commonFR, hero: heroFr, analytics: analyticsFr }
};

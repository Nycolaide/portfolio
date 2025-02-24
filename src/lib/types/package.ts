export interface NpmCounter {
	downloads: number;
	end: string;
	package: string;
	start: string;
}

export interface Github {
	name: string;
	bio: string;
	avatar_url: string;
	[key: string]: unknown;
}

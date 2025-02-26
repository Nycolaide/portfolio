import type { GitHubOrganization, GitHubUser, NpmCounter } from './package';

export interface SocialPlatform {
	url: string;
	icon: string;
}

export interface ResponseAllApi {
	hero: GitHubUser;
	github: GitHubOrganization[];
	npm: NpmCounter[];
}

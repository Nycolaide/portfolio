export interface NpmCounter {
	downloads: number;
	end: string;
	package: string;
	start: string;
}

export interface GitHubUser {
	avatar_url: string;
	bio: string | null;
	blog: string;
	collaborators: number;
	company: string | null;
	created_at: string;
	disk_usage: number;
	email: string | null;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable: boolean | null;
	html_url: string;
	id: number;
	location: string | null;
	login: string;
	name: string | null;
	node_id: string;
	organizations_url: string;
	owned_private_repos: number;
	plan: { name: string; space: number; collaborators: number; private_repos: number };
	private_gists: number;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	total_private_repos: number;
	twitter_username: string | null;
	two_factor_authentication: boolean;
	type: string;
	updated_at: string;
	url: string;
	user_view_type: string;
}

export interface GitHubOrganization {
	archived_at: string | null;
	avatar_url: string;
	blog: string | null;
	company: string | null;
	created_at: string;
	description: string | null;
	email: string | null;
	events_url: string;
	followers: number;
	following: number;
	has_organization_projects: boolean;
	has_repository_projects: boolean;
	hooks_url: string;
	html_url: string;
	id: number;
	is_verified: boolean;
	issues_url: string;
	location: string | null;
	login: string;
	members_url: string;
	name: string | null;
	node_id: string;
	public_gists: number;
	public_members_url: string;
	public_repos: number;
	repos_url: string;
	twitter_username: string | null;
	type: string;
	updated_at: string;
	url: string;
}

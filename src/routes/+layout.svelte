<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.scss';
	import { App } from 'mytril';
	import { getLocalTheme } from 'mytril/tools';

	// api
	import { fetchGitHubMinedelve, fetchGitHubProfile, fetchNpmMytril } from '$lib/api';

	onMount(() => {
		// call api
		fetchGitHubProfile();
		fetchNpmMytril();
		fetchGitHubMinedelve();

		// get theme
		getLocalTheme('@nycolaide-scheme', true);
	});

	let { children } = $props();
</script>

<App>
	{@render children()}
</App>

<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.scss';
	import { App } from 'mytril';
	import { getLocalTheme } from 'mytril/tools';

	// api
	import { fetchGitHubMinedelve, fetchGitHubProfile, fetchNpmMytril } from '$lib/api';

	// components
	import Navigation from '$lib/components/navigation.svelte';

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
	<Navigation />

	{@render children()}

	<footer class="text-center py-5 text-sm">
		<p>&copy; {new Date().getFullYear()} Made with 🤍 by Nycolaide</p>
	</footer>
</App>

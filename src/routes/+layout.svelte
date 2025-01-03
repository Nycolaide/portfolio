<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.scss';
	import { App } from 'mytril';
	import { getLocalTheme } from 'mytril/tools';

	// api
	import { fetchGitHubProfile } from '$lib/api';
	import Navigation from '$lib/components/navigation.svelte';

	onMount(() => {
		fetchGitHubProfile();
		getLocalTheme('@nycolaide-shceme', true);
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

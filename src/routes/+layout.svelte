<script lang="ts">
	import PrimaryNav from '$lib/components/primary-nav.svelte';
	import '../app.scss';
	import { App } from 'mytril';
	let { children } = $props();
</script>

<App>
	<PrimaryNav />
	{@render children()}
</App>

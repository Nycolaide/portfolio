<script lang="ts">
	// components
	import Navigation from '$lib/components/navigation.svelte';
	import Seo from '$lib/components/seo.svelte';

	let { children } = $props();
</script>

<Seo />

<Navigation />

{@render children()}

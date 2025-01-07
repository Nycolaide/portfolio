<script lang="ts">
	// components
	import Navigation from '$lib/components/navigation.svelte';

	let { children } = $props();
</script>

<Navigation />

{@render children()}

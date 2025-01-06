<script lang="ts">
	// components
	import Navigation from '$lib/components/navigation.svelte';

	let { children } = $props();
</script>

<Navigation />

{@render children()}

<footer class="text-center py-5 text-sm">
	<p>&copy; {new Date().getFullYear()} Made with 🤍 by Nycolaide</p>
</footer>

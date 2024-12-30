<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import PrimaryNav from '$lib/components/primary-nav.svelte';
	import '../app.scss';
	import { App } from 'mytril';
	let { children } = $props();
</script>

<App>
	<PrimaryNav />
	{@render children()}

	<Footer />
</App>

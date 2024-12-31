<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
	import PrimaryNav from '$lib/components/primary-nav.svelte';
	import SecondaryNav from '$lib/components/secondary-nav.svelte';
	import '../app.scss';
	import { App } from 'mytril';
	let { children } = $props();
</script>

<App>
	<PrimaryNav />
	{@render children()}
	<SecondaryNav />
	<Footer />
	<Modal />
</App>

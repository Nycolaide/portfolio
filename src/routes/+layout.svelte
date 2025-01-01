<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
	import PrimaryNav from '$lib/components/primary-nav.svelte';
	import SecondaryNav from '$lib/components/secondary-nav.svelte';
	import { onMount } from 'svelte';
	import '../app.scss';
	import { App } from 'mytril';
	import { fetchSocials } from '$lib/stores/socialStore';
	import BottomNav from '$lib/components/bottom-nav.svelte';

	onMount(() => {
		fetchSocials();
	});

	let { children } = $props();
</script>

<App>
	<PrimaryNav />
	{@render children()}
	<SecondaryNav />
	<Footer />
	<Modal />

	<BottomNav />
</App>

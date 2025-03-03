<script lang="ts">
	import { Rgpd } from '$lib/components/analytics';
	import { SiteHeader, SiteFooter } from '$lib/components/app';
	import { App } from 'mytril/components';
	let { children, data } = $props();
</script>

<App>
	<SiteHeader />

	<div class="main-container">
		{@render children()}
	</div>

	<SiteFooter />

	<Rgpd {data} />
</App>

<style lang="postcss">
	.main-container {
		width: 100%;
		margin: auto;
		max-width: 112.5rem;
		padding: 0 1rem;
		transition: padding 0.3s;

		@media screen and (min-width: 40rem) {
			padding: 0 2.5rem;
		}
	}
</style>

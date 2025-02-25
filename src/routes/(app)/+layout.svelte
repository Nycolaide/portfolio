<script lang="ts">
	import { SiteHeader, SiteFooter } from '$lib/components/app';
	import { App } from 'mytril/components';
	let { data, children } = $props();

	console.log('+layout.svelte', data);
</script>

<div class="custom-background">
	<App>
		<SiteHeader />

		<div class="main-container">
			{@render children()}
		</div>

		<SiteFooter />
	</App>
</div>

<style lang="postcss">
	.main-container {
		width: 100%;
		margin: auto;
		max-width: 112.5rem;
		padding: 0 1.5rem;
		transition: padding 0.3s;

		@media screen and (min-width: 40rem) {
			padding: 0 2.5rem;
		}
	}

	:global(.custom-background) {
		background-color: pink;
	}
</style>

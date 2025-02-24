<script lang="ts">
	import { SiteHeader, SiteFooter } from '$lib/components/app';
	import { t, locale, locales } from '$lib/stores';
	import { App } from 'mytril/components';
	let { data, children } = $props();

	console.log('+layout.svelte', data);
</script>

<div class="custom-background">
	<App>
		<p>
			<select bind:value={$locale}>
				{#each locales as l}
					<option value={l}>{l}</option>
				{/each}
			</select>
		</p>

		<h1>{$t('title')}</h1>

		<h1>{@html $t('welcome', { name: 'nycolaide' })}</h1>

		<span class="icomoon icomoon-vuetify"></span>

		<h1>{$t('hero.introduction')}</h1>

		<h1>{$t('timer.d')}</h1>

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
		padding: 0 2.5rem;
	}

	:global(.custom-background) {
		background-color: pink;
	}
</style>

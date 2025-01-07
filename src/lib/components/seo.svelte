<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_MODE_PROD } from '$env/static/public';

	let { formatTitle = true, title = '', description = '' } = $props();

	let formattedTitle = $state(
		formatTitle
			? title
				? `Nycolaide - ${title}`
				: `Nycolaide - Front End Developer Portfolio`
			: title
	);
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={PUBLIC_MODE_PROD === 'true' ? 'index,follow' : 'noindex,nofollow'} />
	<link
		rel="canonical"
		href={`https://nycolaide.dev${page.url.pathname === '/' ? '' : page.url.pathname}`}
	/>
</svelte:head>

<script lang="ts">
	import { PUBLIC_GTM_KEY } from '$env/static/public';

	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// eslint-disable-next-line no-undef
			gtag('consent', 'default', {
				ad_storage: 'denied',
				analytics_storage: 'denied',
				functionality_storage: 'denied'
			});
		}
	});
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtm.js?id=${PUBLIC_GTM_KEY}`}>
	</script>
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
	<!-- svelte-ignore a11y_missing_attribute -->
	<iframe
		src={`https://www.googletagmanager.com/ns.html?id=${PUBLIC_GTM_KEY}`}
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

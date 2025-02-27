<script lang="ts">
	import { PUBLIC_ANALYTICS_KEY } from '$env/static/public';
	import { page } from '$app/state';

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			gtag('config', PUBLIC_ANALYTICS_KEY, {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_ANALYTICS_KEY}`}>
	</script>
	{@html `<script data-svelte-h="svelte-u4hxyp">
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
        gtag('config', '${PUBLIC_ANALYTICS_KEY}');
    </script>`}
</svelte:head>

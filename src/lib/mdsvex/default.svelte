<script lang="ts">
	import { onMount } from 'svelte';
	import { Btn, Grid, GridCol, GridRow, Spacer, Toolbar } from 'mytril';
	import Seo from '$lib/components/seo.svelte';

	let { children, title, date, cover, descritpion } = $props();

	onMount(() => {
		wrapPreTags();
		wrapTableTags();
	});

	function wrapPreTags() {
		const preTags = document.querySelectorAll<HTMLPreElement>('pre');
		preTags.forEach((pre) => {
			const megaWrapper = document.createElement('div');
			megaWrapper.className = 'preview-code';

			const codeWrapper = document.createElement('div');
			codeWrapper.className = 'code-wrapper';

			pre.parentNode?.insertBefore(megaWrapper, pre);
			megaWrapper.appendChild(codeWrapper);
			codeWrapper.appendChild(pre);
		});
	}

	function wrapTableTags() {
		const tableTags = document.querySelectorAll<HTMLPreElement>('table');
		tableTags.forEach((table) => {
			const megaWrapper = document.createElement('div');
			megaWrapper.className = 'table';

			const codeWrapper = document.createElement('div');
			codeWrapper.className = 'table-wrapper';

			table.parentNode?.insertBefore(megaWrapper, table);
			megaWrapper.appendChild(codeWrapper);
			codeWrapper.appendChild(table);
		});
	}
</script>

<Seo {title} description={descritpion} />

<Grid>
	<GridRow>
		<GridCol cols="12">
			<Toolbar color="transparent">
				<div class="header-article-blog font-bold text-lg">
					<a href="/">Nycolaide</a>
				</div>
				<Spacer />
				<Btn href="/blog" rounded="xl">Return to blog</Btn>
			</Toolbar>
		</GridCol>
	</GridRow>
</Grid>

<Grid class="mt-14 relative">
	<GridRow>
		<GridCol cols="12">
			<article class="markdown">
				<div
					class="text-center sm:text-left mb-16 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
				>
					<h1>{title}</h1>
				</div>

				<img class="cover rounded-xl" src={cover} alt={title} />

				<div class="text-center my-8">
					<p>{date}</p>
				</div>

				<div class="content mx-auto">
					{@render children()}
				</div>
			</article>
		</GridCol>
	</GridRow>
</Grid>

<style lang="scss">
	.header-article-blog {
		a {
			text-decoration: none;
			color: var(--myt-color-on-surface);
		}
	}
	article {
		.cover {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.content {
			max-width: 44rem;
		}
	}
</style>

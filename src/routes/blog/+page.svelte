<script lang="ts">
	import { posts } from '$lib/stores/posts';
	import Resume from '$lib/components/articles/resume.svelte';
	import { Btn, Grid, GridCol, GridRow } from 'mytril';
	import Seo from '$lib/components/seo.svelte';
	import ResumePrimary from '$lib/components/articles/resume-primary.svelte';

	let post = $posts[0];
	let postList = $posts.slice(1);
</script>

<Seo title="Blog" description="" />

<Grid class="relative mt-5">
	<GridRow class="text-center md:text-left">
		<GridCol cols="12" md="6">
			<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Blog</h1>
			<p class="mt-4">Nycolaide Technology intelligence</p>
		</GridCol>
		<GridCol cols="12" md="6" class="flex align-center justify-center md:justify-end">
			<Btn href="/" rounded="xl">Return to home</Btn>
		</GridCol>
	</GridRow>
</Grid>

<Grid class="mt-5 md:mt-16">
	<GridRow>
		<GridCol cols="12">
			<ResumePrimary {post} />
		</GridCol>
	</GridRow>

	{#if postList.length !== 0}
		<GridRow>
			<GridCol cols="12" class="font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
				Other posts
			</GridCol>
		</GridRow>
		<GridRow>
			{#each postList as post}
				<GridCol cols="12" sm="6">
					<Resume {post} />
				</GridCol>
			{/each}
		</GridRow>
	{/if}
</Grid>

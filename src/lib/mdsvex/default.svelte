<script lang="ts">
	import { Btn, Grid, GridCol, GridRow, Spacer, Toolbar } from 'mytril';

	let { children, title, date, cover } = $props();
</script>

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
			<article>
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

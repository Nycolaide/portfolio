<script lang="ts">
	import { posts } from '$lib/stores/posts';
	import { Btn, CardActions, CardText, Icon, Spacer } from 'mytril';

	let post = $state($posts[0]);
	let index = $state(0);
	let intervalId: ReturnType<typeof setInterval>;

	const changeIndex = () => {
		let limit = $posts.length > 5 ? 5 : $posts.length;
		return (index = index + 1 < limit - 1 ? index + 1 : 0);
	};

	$effect(() => {
		if (index) post = $posts[index];
	});

	$effect(() => {
		intervalId = setInterval(changeIndex, 5000);
		return () => clearInterval(intervalId);
	});
</script>

<CardText>
	<img src={post.cover} class="cover-article rounded-lg" alt={post.title} />
</CardText>
<CardText>
	<p class="text-lg mb-4">{post?.title}</p>
	<p style="max-height: 94px;">
		{post?.description}
	</p>
</CardText>

<CardActions class="relative pa-0" style="top: -0;">
	<div class="ml-2">
		{#each $posts.slice(0, 5) as post, i}
			<button
				class="pagination-item"
				class:is-selected={i === index}
				onclick={() => (index = i)}
				aria-label={String(i)}
			></button>
		{/each}
	</div>

	<Spacer />

	<div class="action-area align-content-end text-end">
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-top" size="lg" color="background" />
		<div>
			<Btn icon rounded="pill" color="on-surface" href={`/blog/${post.slug}`}>
				<Icon size="lg" icon="svg:icons/app/arrow-right.svg" color="surface" />
			</Btn>
		</div>

		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-bottom" size="lg" color="background" />
	</div>
</CardActions>

<style lang="scss">
	.cover-article {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.pagination-item {
		border: 0;
		border-radius: 9999px;
		background-color: color-mix(in oklab, var(--myt-color-on-surface) 50%, transparent);
		height: 10px;
		width: 10px;
		margin-right: 5px;

		&.is-selected,
		&:hover {
			background: var(--myt-color-on-surface);
		}
	}

	.action-area {
		background-color: var(--myt-color-background);
		height: 100%;
		border-radius: 35px 0 0;
		width: 57px;
		height: 57px;
		position: relative;
		transition:
			color 0.5s,
			background-color 0.5s,
			border-color 0.5s;

		:global(.svg-corner-top) {
			position: absolute;
			top: 29px;
			left: -28px;
			transform: rotate(-180deg);
			transition:
				color 0.5s,
				background-color 0.5s,
				border-color 0.5s;
		}

		:global(.svg-corner-bottom) {
			position: absolute;
			right: 0;
			bottom: 57px;
			transform: rotate(180deg);
			transition:
				color 0.5s,
				background-color 0.5s,
				border-color 0.5s;
		}
	}
</style>

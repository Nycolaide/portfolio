<script lang="ts">
	import { posts } from '$lib/stores/posts';
	import { Btn, CardActions, CardText, Icon, Spacer } from 'mytril';

	let post = $posts[0];
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

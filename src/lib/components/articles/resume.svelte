<script lang="ts">
	import { Card, CardText, Spacer } from 'mytril';
	import { githubProfile } from '$lib/stores/github';

	// default
	import Gravatar from '$lib/assets/github-avatar.png';

	let { post } = $props();
</script>

<Card href={'/blog/' + post.slug} rounded="lg">
	<CardText>
		<img src={post.cover} class="cover-article rounded-lg" alt={post.cover} />
	</CardText>
	<CardText>
		<p class="text-lg md:text-xl lg:text-2xl mb-4">{post.title}</p>
		<p class="lg:text-lg">
			{post.description}
		</p>
	</CardText>
	<CardText class="flex">
		<div class="lg:text-lg font-light">{post.date}</div>
		<Spacer />
		<div class="profil flex align-center ga-2 me-2">
			<img
				src={$githubProfile?.avatar_url}
				srcset={Gravatar}
				alt="laurent grimaldi"
				class="avatar rounded-pill"
			/>
			<span class="font-bold">Nycolaide</span>
		</div></CardText
	>
</Card>

<style lang="scss">
	.cover-article {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar {
		height: 50px;
		width: 50px;
	}
</style>

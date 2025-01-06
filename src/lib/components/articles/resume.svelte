<script lang="ts">
	import { Card, CardText, Spacer } from 'mytril';
	import { githubProfile } from '$lib/stores/github';

	// default
	import Gravatar from '$lib/assets/github-avatar.png';
</script>

<Card href="#" rounded="lg">
	<CardText>
		<img src="images/bg.jpg" class="cover-article rounded-lg" alt="background" />
	</CardText>
	<CardText>
		<p class="text-lg mb-4">First Article Blog</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ducimus mollitia similique
			porro atque maxime, at ipsum doloremque quia quas, voluptatem aliquam ratione minus? Quisquam
			aliquid explicabo facere iste blanditiis!
		</p>
	</CardText>
	<CardText class="flex">
		<div>DATEEEEEEEEEEEEEEEE</div>
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

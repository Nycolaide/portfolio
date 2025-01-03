<script lang="ts">
	import { Btn, CardItems, CardText, Icon } from 'mytril';
</script>

<CardText>
	<img src="images/bg.jpg" class="cover-music rounded-lg" alt="background" />
</CardText>
<CardText>
	<p class="text-lg mb-4">Discover my coding playlist</p>
	<p>Don't hesitate to follow me for the latest updates.</p>
</CardText>
<CardItems>
	<svelte:fragment slot="append">
		<Btn
			rounded="pill"
			size="lg"
			color="#FF0033"
			colorText="on-primary"
			href="https://music.youtube.com/playlist?list=PLcuwjYZE7RhzyPYDkDgBWdNplYBgnwHCM&si=QuQ8rEa3nM1RGTPI"
			target="_blank"
		>
			Listen on
			<svelte:fragment slot="append">
				<Icon icon="svg:icons/social/youtube-music.svg" size="lg" color="background" />
			</svelte:fragment>
		</Btn>
	</svelte:fragment>
</CardItems>

<style lang="scss">
	.cover-music {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

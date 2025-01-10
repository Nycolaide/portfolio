<script lang="ts">
	import { Card, CardText, Grid, GridCol, GridRow, Spacer } from 'mytril';
	import { githubProfile } from '$lib/stores/github';

	// default
	import Gravatar from '$lib/assets/github-avatar.png';

	let { post } = $props();
</script>

<Card href={'/blog/' + post.slug} rounded="lg">
	<Grid>
		<GridRow noGutters>
			<GridCol cols="12" md="6">
				<CardText class="pa-0">
					<img src={post.cover} class="cover-article rounded-lg" alt={post.cover} />
				</CardText>
			</GridCol>

			<GridCol cols="12" md="6">
				<GridRow noGutters class="article-description">
					<GridCol cols="12">
						<CardText class="pa-0">
							<p class="text-lg md:text-xl lg:text-2xl mb-4">{post.title}</p>
							<p class="lg:text-lg">
								{post.description}
							</p>
						</CardText>
					</GridCol>
					<GridCol>
						<CardText class="flex pa-0">
							<div class="font-light">Publish on {post.date}</div>
							<Spacer />
							<div class="profil flex align-center ga-2 me-2">
								<img
									src={$githubProfile?.avatar_url}
									srcset={Gravatar}
									alt="laurent grimaldi"
									class="avatar rounded-pill"
								/>
								<span class="font-bold">Nycolaide</span>
							</div>
						</CardText>
					</GridCol>
				</GridRow>
			</GridCol>
		</GridRow>
	</Grid>
</Card>

<style lang="scss">
	.cover-article {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar {
		height: 32px;
		width: 32px;
	}

	:global(.article-description) {
		grid-template-rows: 1fr max-content;
		display: grid;
		height: 100%;
	}
</style>

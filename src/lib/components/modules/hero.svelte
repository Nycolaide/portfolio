<script lang="ts">
	import { githubProfile } from '$lib/stores/github';

	// default
	import Gravatar from '$lib/assets/github-avatar.png';
	import { Btn, Grid, GridCol, GridRow } from 'mytril';
</script>

<Grid id="about">
	<GridRow class="ga-5">
		<GridCol cols="12" md="4" class="flex justify-center">
			<img
				src={$githubProfile?.avatar_url}
				srcset={Gravatar}
				alt="laurent grimaldi"
				width="200px"
			/>
		</GridCol>
		<GridCol cols="12" md="7" class="flex flex-column justify-space-between">
			<p class="bio text-lg sm:text-xl md:text-2xl">
				I'm a web developer based in France! I specialize in Frontend Engineering, focusing on
				building high quality web experiences through clean code and thoughtful design.
			</p>

			<Btn
				class="font-bold mx-auto mt-10 md:mx-0"
				size="lg"
				outlined
				rounded="pill"
				style="width: fit-content;"
				href="/#contact"
			>
				Here we go!
			</Btn>
		</GridCol>
	</GridRow>
</Grid>

<style lang="scss">
	img {
		width: 100%;
		max-width: 300px;
		min-width: 200px;
		border-radius: 30px;
	}

	.bio {
		line-height: 2.5rem;

		@media screen and (max-width: 790px) {
			line-height: 1.75rem;
		}
	}
</style>

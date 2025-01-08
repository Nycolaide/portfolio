<script lang="ts">
	import { Btn, CardActions, CardText, Icon, Spacer } from 'mytril';
</script>

<CardText id="card-msg" class="pb-0">
	<div class="grid">
		<img src="/images/youtube-music.jpg" class="cover-music rounded-lg" alt="background" />
		<div>
			<p class="font-bold">Code with Music</p>
			<p class="font-thin text-xs">on Youtube Music</p>
		</div>
	</div>

	<div class="mt-2 paragraph">
		<p>Discover my coding playlist, Don't hesitate to follow me for the latest updates.</p>
	</div>
</CardText>

<CardActions class="relative pa-0">
	<Spacer />

	<div class="action-area align-content-end text-end">
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-top" size="lg" color="background" />
		<div>
			<Btn
				icon
				rounded="pill"
				color="#FF0033"
				href="https://music.youtube.com/playlist?list=PLcuwjYZE7RhzyPYDkDgBWdNplYBgnwHCM&si=IPnxYQFXF7mFl48m"
				target="_blank"
			>
				<Icon size="lg" icon="svg:icons/social/youtube-music.svg" color="background" />
			</Btn>
		</div>

		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-bottom" size="lg" color="background" />
	</div>
</CardActions>

<style lang="scss">
	:global(#card-msg .myt-icon) {
		--c-icon-size-multiplier: 2.75;
	}

	:global(#card-msg) {
		.paragraph {
			height: 30px;
		}

		& > div:first-child {
			display: grid;
			grid-template-columns: 64px 1fr;
			gap: 1rem;
			align-items: center;
			min-height: 64px;
		}
	}

	.cover-music {
		width: 100%;
		height: 100%;
		max-width: 64px;
		max-height: 64px;
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

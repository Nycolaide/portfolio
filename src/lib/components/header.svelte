<script lang="ts">
	import { Card } from 'mytril';
	import HeroMusic from './hero/hero-music.svelte';
	import HeroBlog from './hero/hero-blog.svelte';
	import HeroMessage from './hero/hero-message.svelte';
</script>

<div class="header-grid-box">
	<div>
		<div class="header-left-box">
			<Card class="absolute rounded-bl" rounded="xl">
				<div class="background-card"></div>
				<HeroMessage />
			</Card>
		</div>
		<div class="header-right-box">
			<Card id="hero-stats" rounded="xl" color="on-surface" colorText="surface">
				<HeroMusic />
			</Card>
			<Card id="hero-others" rounded="xl" color="info" colorText="on-info">
				<HeroBlog />
			</Card>
		</div>
	</div>
</div>

<style lang="scss">
	.header-grid-box {
		width: 100%;
		margin: auto;
		max-width: 1800px;
		padding: 0 32px;
		margin-top: 11px;

		& > div {
			display: flex;
			justify-content: space-between;
			gap: 0.6em;
			min-height: 630px;
			height: 95vh;

			@media screen and (max-width: 790px) {
				flex-direction: column;
				height: auto;
			}

			.header-left-box {
				position: relative;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: end;

				@media screen and (max-width: 790px) {
					min-height: 620px;
				}

				:global(.myt-card) {
					width: 100%;
					height: 100%;
					// border-color: var(--myt-color-background);
					// border-width: 1px;
					// border-style: solid;
					overflow: initial !important;

					transition:
						color 0.5s,
						background-color 0.5s,
						border-color 0.5s;
				}

				.background-card {
					background-image: url('/images/bg-v2.png');
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					width: 100%;
					height: 100%;
					position: absolute;
					overflow: hidden;
					border-radius: 1.25rem;
				}
			}

			.header-right-box {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 0.6em;
				align-items: center;
				height: 100%;

				:global(#hero-stats) {
					width: 280px;
					min-height: 200px;
					overflow: initial;

					@media screen and (max-width: 790px) {
						width: 100%;
					}
				}

				:global(#hero-others) {
					position: relative;
					width: 280px;
					height: 100%;
					overflow: initial;

					@media screen and (max-width: 790px) {
						width: 100%;
					}
				}

				:global(#hero-others),
				:global(#hero-stats) {
					border-color: var(--myt-color-background);
					border-width: 1px;
					border-style: solid;
					transition:
						color 0.5s,
						background-color 0.5s,
						border-color 0.5s;
				}
			}
		}
	}
</style>

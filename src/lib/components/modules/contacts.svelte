<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	import { Btn, Card, CardText, Grid, GridCol, GridRow, Icon, Tooltip } from 'mytril';

	let isCopied = $state(false);
	let socials = $state([
		{
			url: 'https://github.com/Nycolaide',
			name: 'github',
			icon: 'github.svg'
		},
		{
			url: 'https://www.npmjs.com/~nycolaide',
			name: 'npm',
			icon: 'npm.svg'
		},
		{
			url: 'https://www.linkedin.com/in/nycolaide',
			name: 'linkedin',
			icon: 'linkedin.svg'
		}
	]);

	const copy = async (text: string) => {
		isCopied = await copyToClipboard(text);
	};
</script>

<Card
	id="contact"
	class="sm:pa-8 mt-16 mx-3 text-center sm:text-left"
	rounded="xl"
	color="contact"
	colorText="on-info"
>
	<CardText>
		<h2 class="text-title-contact text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
			Let's create something great together
		</h2>
	</CardText>
	<Grid>
		<GridRow noGutters>
			<GridCol cols="12" sm="6">
				<div>
					<p class="mb-2 lg:text-lg">Follow me on:</p>
					{#each socials as social}
						<Btn
							icon
							density="comfortable"
							rounded="pill"
							text
							size="lg"
							sizeLg="xl"
							href={social.url}
							target="_blank"
						>
							<Icon icon={`svg:icons/social/${social.icon}`} size="lg" color="on-info" />
						</Btn>
					{/each}
				</div>
			</GridCol>
			<GridCol cols="12" sm="6">
				<div class="grid sm:justify-end">
					<Btn
						class="font-bold"
						block
						size="lg"
						sizeLg="xl"
						outlined
						rounded="pill"
						color="on-info"
						href="mailto:laurent.grimaldi@minedelve.com"
					>
						Here we go!
					</Btn>
					<Tooltip text="Copied to clipboard" bind:open={isCopied}>
						<button class="mt-2 lg:text-lg" onclick={() => copy('laurent.grimaldi@minedelve.com')}>
							laurent.grimaldi@minedelve.com
						</button>
					</Tooltip>
				</div>
			</GridCol>
		</GridRow>
	</Grid>
</Card>

<style lang="scss">
	h2 {
		font-family: var(--myt-typescale-body);

		@media screen and (min-width: 790px) {
			max-width: 70%;
		}

		@media screen and (min-width: 1300px) {
			max-width: 55%;
		}

		@media screen and (min-width: 1600px) {
			max-width: 45%;
		}
	}

	:global(#contact) {
		background-image: url(/images/contact-bg.png) 50% 50% no-repeat;
		background: -o-linear-gradient(transparent, transparent);
		background-size: cover;
		backdrop-filter: blur(10px);

		@media screen and (min-width: 790px) {
			margin-left: 18px;
			margin-right: 18px;
		}

		.text-title-contact {
			margin: 0 auto;

			@media screen and (min-width: 790px) {
				margin: inherit;
			}
		}
	}
</style>

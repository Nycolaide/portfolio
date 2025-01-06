<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	import { Btn, Card, CardText, Grid, GridCol, GridRow, Icon, Tooltip } from 'mytril';

	let isCopied = $state(false);

	const copy = async (text: string) => {
		isCopied = await copyToClipboard(text);
	};
</script>

<Card
	id="contact"
	class="sm:pa-8 mt-16 text-center sm:text-left"
	rounded="xl"
	color="secondary"
	colorText="on-secondary"
>
	<CardText>
		<h2 class="text-title-contact text-2xl sm:text-4xl font-regular">
			Let's create something great together
		</h2>
	</CardText>
	<Grid>
		<GridRow noGutters>
			<GridCol cols="12" sm="6">
				<div>
					<p class="mb-2">Follow me on:</p>
					<Btn
						icon
						density="comfortable"
						rounded="pill"
						text
						size="lg"
						href="https://github.com/Nycolaide"
						target="_blank"
					>
						<Icon icon="svg:icons/social/github.svg" size="lg" color="background" />
					</Btn>
					<Btn
						icon
						density="comfortable"
						rounded="pill"
						text
						size="lg"
						href="https://www.npmjs.com/~nycolaide"
						target="_blank"
					>
						<Icon icon="svg:icons/social/npm.svg" size="lg" color="background" />
					</Btn>

					<Btn
						icon
						density="comfortable"
						rounded="pill"
						text
						size="lg"
						href="https://www.linkedin.com/in/nycolaide/"
						target="_blank"
					>
						<Icon icon="svg:icons/social/linkedin.svg" size="lg" color="background" />
					</Btn>
				</div>
			</GridCol>
			<GridCol cols="12" sm="6">
				<div class="grid sm:justify-end">
					<Btn
						class="font-bold"
						block
						size="lg"
						outlined
						rounded="pill"
						color="on-secondary"
						href="mailto:laurent.grimaldi@minedelve.com"
					>
						Here we go!
					</Btn>
					<Tooltip text="Copied to clipboard" bind:open={isCopied}>
						<button class="mt-2" onclick={() => copy('laurent.grimaldi@minedelve.com')}>
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
	}

	:global(#contact) {
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

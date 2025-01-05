<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	import { Btn, Card, CardActions, CardText, Spacer, Tooltip } from 'mytril';

	let isCopied = $state(false);

	const copy = async (text: string) => {
		isCopied = await copyToClipboard(text);
	};
</script>

<Card id="contact" class="pa-8 mt-16" rounded="xl" color="secondary" colorText="on-secondary">
	<CardText>
		<h2 class="text-4xl font-regular">Blablabla bla bla ? oh blah blah blahhhhh ...</h2>
	</CardText>
	<CardActions>
		Follow me on: Github / LinkedIn / Twitter
		<Spacer />
		<div class="grid justify-end">
			<Btn class="font-bold" block size="lg" outlined rounded="pill">Here we go!</Btn>
			<Tooltip text="Copied to clipboard" bind:open={isCopied}>
				<Btn class="pa-0" density="compact" link onclick={() => copy('email@adresse.com')}>
					email@adresse.com
				</Btn>
			</Tooltip>
		</div>
	</CardActions>
</Card>

<style lang="scss">
	h2 {
		font-family: var(--myt-typescale-body);
		max-width: 70%;
	}
</style>

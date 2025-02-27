<script lang="ts">
	import { getCookie, setCookie } from '$lib/actions/cookie';
	import {
		Btn,
		Card,
		CardActions,
		CardText,
		CardTitle,
		Dialog,
		Icon,
		Spacer
	} from 'mytril/components';
	import { onMount } from 'svelte';

	let open = $state(false);

	onMount(() => {
		const cookie = getCookie('consent');
		if (!cookie) {
			open = true;
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			if (typeof gtag !== 'undefined') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				// eslint-disable-next-line no-undef
				gtag('consent', 'update', {
					ad_storage: cookie === 'accept' ? 'granted' : 'denied',
					analytics_storage: cookie === 'accept' ? 'granted' : 'denied',
					functionality_storage: cookie === 'accept' ? 'granted' : 'denied'
				});
			}
		}
	});

	function handleSetConsentMode(state: string) {
		setCookie('consent', state);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (typeof gtag !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// eslint-disable-next-line no-undef
			gtag('consent', 'update', {
				ad_storage: state === 'accept' ? 'granted' : 'denied',
				analytics_storage: state === 'accept' ? 'granted' : 'denied',
				functionality_storage: state === 'accept' ? 'granted' : 'denied'
			});
		}

		open = false;
	}
</script>

<Dialog bind:open>
	<Card>
		<CardActions>
			<Spacer />
			<Btn onclick={() => handleSetConsentMode('refuse')} size="sm" variant="text">
				Refuser mes cookies tiers
			</Btn>
		</CardActions>
		<CardTitle><strong>La protection de vos données, c'est important !</strong></CardTitle>
		<CardText>
			<p>
				Mon portfolio et nos partenaires utilisent des cookies ou des technologies similaire pour me
				permettre d'améliorer mon site, votre expérience de navigation, de collecter des
				statistiques et d'assurer le bon fonctionnement du site.
			</p>
		</CardText>
		<CardActions>
			<Spacer />
			<Btn onclick={() => handleSetConsentMode('accept')} background="primary" color="on-primary">
				Accepter mes cookies
				{#snippet append()}
					<Icon icon="font:mgc_cookie_line" color="on-primary" />
				{/snippet}
			</Btn>
		</CardActions>
	</Card>
</Dialog>

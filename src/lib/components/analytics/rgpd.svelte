<script lang="ts">
	import { setCookie } from '$lib/actions/cookie';
	import { t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
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

	let { data } = $props();

	let open = $state(false);

	$effect.pre(() => {
		console.log('rgpd', data);

		if (!data?.cookie?.consentMode) {
			open = true;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
		} else if (typeof gtag !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			// eslint-disable-next-line no-undef
			gtag('consent', 'update', {
				ad_storage: data?.cookie?.consentMode === 'accept' ? 'granted' : 'denied',
				analytics_storage: data?.cookie?.consentMode === 'accept' ? 'granted' : 'denied',
				functionality_storage: data?.cookie?.consentMode === 'accept' ? 'granted' : 'denied'
			});
		}
	});

	// onMount(() => {
	// 	const cookie = getCookie('consent');
	// 	if (!cookie) {
	// 		open = true;
	// 	} else {
	// 		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// 		// @ts-expect-error
	// 		if (typeof gtag !== 'undefined') {
	// 			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// 			// @ts-expect-error
	// 			// eslint-disable-next-line no-undef
	// 			gtag('consent', 'update', {
	// 				ad_storage: cookie === 'accept' ? 'granted' : 'denied',
	// 				analytics_storage: cookie === 'accept' ? 'granted' : 'denied',
	// 				functionality_storage: cookie === 'accept' ? 'granted' : 'denied'
	// 			});
	// 		}
	// 	}
	// });

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
	<Card rounded="4xl">
		<CardActions>
			<Spacer />
			<Btn rounded="pill" onclick={() => handleSetConsentMode('refuse')} size="sm" variant="text">
				{capitalize($t('analytics.action.refuse'))}
			</Btn>
		</CardActions>
		<CardTitle><strong>{capitalize($t('analytics.title'))}</strong></CardTitle>
		<CardText>
			<p>
				{$t('analytics.content')}
			</p>
		</CardText>
		<CardActions class="!mb-2">
			<Spacer />
			<Btn
				rounded="pill"
				onclick={() => handleSetConsentMode('accept')}
				background="primary"
				color="on-primary"
			>
				{capitalize($t('analytics.action.accept'))}
				{#snippet append()}
					<Icon icon="font:mgc_cookie_line" color="on-primary" />
				{/snippet}
			</Btn>
		</CardActions>
	</Card>
</Dialog>

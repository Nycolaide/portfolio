<script lang="ts">
	import { t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
	import { Card, CardText, Divider, Icon, Img } from 'mytril/components';
	import { onMount } from 'svelte';

	let { data } = $props();

	const titre = [
		'eleveur de poney',
		'vainceur du combat de regard contre Chuck Norris',
		'producteur régional de licorne',
		'protecteur du CTRL C CTRL V',
		'a trouver la poulette'
	];
	let displayTitre = $state('');

	const changeTitre = () => {
		const index = Math.floor(Math.random() * titre.length);
		const prev = titre.findIndex((item) => item === displayTitre);

		if (prev === index) changeTitre();

		return (displayTitre = titre[index]);
	};
	const life = Array.from({ length: 30 }, (_, i) => i + 1);
	const level = Array.from({ length: 7 }, (_, i) => i + 1);

	onMount(() => {
		changeTitre();
	});
</script>

<div class="relative">
	<Img src="/images/treasure-invert.png" alt="treasure" aspectRatio="16/7" />
	<Img
		class="!absolute bottom-0 w-[33%] rotate-[-6deg] rounded-2xl border-6 border-neutral-400"
		src={'images/nycolaide-avatar.png'}
		alt="nycolaide"
	/>
</div>

<Card class="-top-4 z-1" rounded="4xl">
	<CardText>
		<p class="!mb-1 text-3xl font-bold">Laurent</p>
		<div class="!mb-3 justify-between md:text-lg lg:flex">
			<p>@Nycolaide</p>
			<p class="opacity-50">Humain • Développeur FrontEnd</p>
		</div>
		<div class="!mb-2 flex items-center gap-2">
			<Icon icon="font:mgc_random_line" onclick={() => changeTitre()} />
			<p>{capitalize(displayTitre)}</p>
		</div>
		<Divider opacity="1" />
		<div class="!mt-4">
			<p class="!mt-2 !mb-2 uppercase">Vie</p>
			<div>
				{#each life as heart}
					{#if heart === life.length}
						<Icon icon="font:mgc_heart_half_fill" color="red" />
					{:else}
						<Icon icon="font:mgc_heart_fill" color="red" />
					{/if}
				{/each}
			</div>
		</div>
		<div>
			<p class="!mt-2 !mb-2 uppercase">Expériences</p>
			<div>
				{#each level as lvl}
					<span class="hidden">{lvl}</span>
					<Icon icon="font:mgc_award_line" color="oklch(.606 .25 292.717)" />
				{/each}
			</div>
		</div>
	</CardText>
</Card>
<Card class="-top-10 !rounded-t-none !pt-6" rounded="4xl" background="primary" color="on-primary">
	<CardText class="grid grid-cols-3 gap-2 ">
		<div>
			<div class="!ms-1 text-lg font-bold">
				{data?.api?.hero?.public_repos || 0}
			</div>
			<p class="flex items-center gap-1 text-xs">
				<Icon icon="font:mgc_package_line" color="on-primary" />
				{capitalize($t('hero.counters.public_repos'))}
			</p>
		</div>
		<div>
			<div class="!ms-1 text-lg font-bold">
				{data?.api?.hero?.followers || 0}
			</div>
			<p class="flex items-center gap-1 text-xs">
				<Icon icon="font:mgc_group_line" color="on-primary" />
				{capitalize($t('hero.counters.followers'))}
			</p>
		</div>
		<div>
			<div class="!ms-1 text-lg font-bold">
				{data?.api?.hero?.following || 0}
			</div>
			<p class="flex items-center gap-1 text-xs">
				<Icon icon="font:mgc_user_heart_line" color="on-primary" />
				{capitalize($t('hero.counters.following'))}
			</p>
		</div>
	</CardText>
</Card>

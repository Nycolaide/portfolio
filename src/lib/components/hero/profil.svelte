<script lang="ts">
	import { heroTitle, t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
	import { Card, CardText, Divider, Icon, Img } from 'mytril/components';
	import { onMount } from 'svelte';

	let { data } = $props();
	let displayTitle = $state('');

	const handleUpdateTitle = () => {
		const index = Math.floor(Math.random() * heroTitle.length);
		const prev = heroTitle.findIndex((item) => item.includes(displayTitle));

		if (prev === index) handleUpdateTitle();

		return (displayTitle = heroTitle[index]);
	};

	const life = Array.from({ length: 30 }, (_, i) => i + 1);
	const level = Array.from({ length: 7 }, (_, i) => i + 1);

	onMount(() => {
		handleUpdateTitle();
	});
</script>

<div class="relative">
	<Img src="/images/treasure-invert.png" alt="treasure-nycolaide" aspectRatio="16/7" />
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
			<p class="opacity-50">{$t('hero.title')}</p>
		</div>
		<div class="!mb-2 flex items-center gap-2">
			<span class="roll-dice">
				<Icon icon="font:mgc_random_line" onclick={() => handleUpdateTitle()} color="orange" />
			</span>
			<p>{capitalize(displayTitle)}</p>
		</div>
		<Divider opacity="1" />
		<div class="!mt-4">
			<p class="!mt-2 !mb-2 uppercase">{capitalize($t('life'))}</p>
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
			<p class="!mt-2 !mb-2 uppercase">{capitalize($t('level'))}</p>
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

<style lang="postcss">
	.roll-dice {
		animation: 0.5s linear infinite shake;
		transform: rotate(-20deg);
		cursor: pointer;
	}
</style>

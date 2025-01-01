<script lang="ts">
	import { Btn, Card, CardActions, CardText, Icon } from 'mytril';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { fetchSkills, skills, type SkillCategory } from '$lib/stores/skillStore';

	import closeSVG from '$lib/assets/icons/close.svg';

	let open: boolean = $state(false);

	$effect(() => {
		if (page.url.searchParams.get('modal')) open = true;
		else open = false;
	});

	$effect(() => {
		if (open && page.url.searchParams.get('modal') && page.url.searchParams.get('modal') !== null) {
			const key = page.url.searchParams.get('modal') as SkillCategory;
			if (key !== null) fetchSkills(key);
		}
	});

	function closeModal() {
		const currentUrl = new URL(page.url);
		currentUrl.searchParams.delete('modal');
		goto(currentUrl.toString(), { replaceState: true });
	}
</script>

<div class="modal" class:open-modal={open}>
	<button class="overlay" onclick={closeModal}><span>close</span></button>
	<div class="content">
		<Card>
			<CardText>
				{#if $skills.loading}
					Loading...
				{:else if $skills.data}
					{#each $skills.data as { name }}
						<p>{name}</p>
					{/each}
				{:else}
					No data
				{/if}
			</CardText>
			<CardText>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe maiores dolores, sint
				asperiores modi quo a? Soluta explicabo sint, consequatur eligendi ea rem odio dolores
				facere culpa veniam. Quos.
			</CardText>
			<CardActions class="my-8" />
		</Card>
	</div>
</div>

{#if open}
	<Btn id="close-bottom-view-modal" icon size="lg" onclick={closeModal} class="fixed">
		<Icon icon={`svg:${closeSVG}`} />
	</Btn>
{/if}

<style>
	.modal {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 9998;
		top: 0;
		transition-duration: 0.2s;
		opacity: 0;
		visibility: hidden;
	}

	.modal.open-modal {
		pointer-events: auto;
		visibility: visible;
		opacity: 1;
	}

	.overlay {
		background-color: color-mix(in oklab, black 50%, transparent);
		width: 100%;
		height: 100%;
		animation: fade 0.2s ease-out;
	}

	.overlay > span {
		opacity: 0;
	}

	.content {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		animation: fade 0.2s ease-out;
		bottom: 0;
		position: inherit;
		width: 100%;
	}

	.content > :global(.myt-card) {
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.content > :global(*) {
		max-height: calc(100% - 3rem);
		margin: 0 auto;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

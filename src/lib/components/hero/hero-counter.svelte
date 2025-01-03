<script lang="ts">
	import { CardActions, CardText, Icon } from 'mytril';

	const texts = [
		{
			counter: '15k',
			text: 'Written line of code'
		},
		{
			counter: '364 days',
			text: 'To win against Chuck Norris at debugger'
		},
		{
			icon: 'moon.svg',
			text: 'Learn the dark side of the code'
		}
	];
	let display = $state(texts[0]);
	let intervalId: ReturnType<typeof setInterval>;

	const changeText = () => {
		const index = texts.findIndex((item) => item.text === display.text);
		display = texts[index + 1 > texts.length - 1 ? 0 : index + 1];
	};

	const handleClickText = (index: number) => {
		display = texts[index];
		clearInterval(intervalId);

		intervalId = setInterval(changeText, 3000);
	};

	$effect(() => {
		intervalId = setInterval(changeText, 3000);
		return () => clearInterval(intervalId);
	});
</script>

<CardText id="card-msg" class="text-center">
	{#if display.icon}
		<Icon icon={`svg:icons/app/${display.icon}`} size="lg" />
	{:else}
		<p class="text-4xl font-bold">{display.counter}</p>
	{/if}

	<p class="text-md font-thin">{display.text}</p>
</CardText>
<CardActions>
	{#each texts as text, index}
		<button
			class="pagination-item"
			class:pagination-selected={display.text === text.text}
			onclick={() => handleClickText(index)}
			aria-label={String(index)}
		>
		</button>
	{/each}
</CardActions>

<style lang="scss">
	.pagination-item {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		background: color-mix(in oklab, var(--myt-color-on-surface) 50%, transparent);
		width: 14px;
		height: 14px;
		border-radius: 9999px;

		&.pagination-selected,
		&:hover {
			background: var(--myt-color-on-surface);
		}
	}

	:global(#card-msg .myt-icon) {
		--c-icon-size-multiplier: 2.75;
	}
</style>

<script lang="ts">
	import { Tooltip } from 'mytril/components';

	let { level } = $props();

	let message = $state('');

	$effect(() => {
		if (level < 40) {
			message = 'Beginner';
		} else if (level < 70) {
			message = 'Intermediate';
		} else {
			message = 'Advanced';
		}
	});
</script>

<Tooltip text={message}>
	<div class="progress">
		<div class="progress-bar" style="width: {level}%"></div>
	</div>
</Tooltip>

<style lang="postcss">
	.progress {
		width: 100%;
		height: 0.5rem;
		background: var(--color-surface-variant);
		border-radius: 0.625rem;
		overflow: hidden;
		margin-top: 0.938rem;

		.progress-bar {
			height: 100%;
			background: var(--color-info);
			transition: width 0.5s;
		}
	}
</style>

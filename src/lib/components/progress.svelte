<script lang="ts">
	import { Tooltip } from 'mytril';

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

<style lang="scss">
	.progress {
		width: 100%;
		height: 8px;
		background: var(--myt-color-background);
		border-radius: 10px;
		overflow: hidden;
		margin-top: 15px;

		.progress-bar {
			height: 100%;
			background: var(--myt-color-info);
			transition: width 0.5s;
		}
	}
</style>

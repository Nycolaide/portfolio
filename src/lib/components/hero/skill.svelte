<script lang="ts">
	import { Icon, Tooltip } from 'mytril/components';
	import { capitalize } from 'mytril/actions';
	import { t } from '$lib/stores';

	let { skill, select = $bindable() } = $props();
	let message = $state('beginner');

	$effect(() => {
		if (skill?.level < 40) {
			message = 'beginner';
		} else if (skill?.level < 70) {
			message = 'intermediate';
		} else {
			message = 'advanced';
		}
	});
</script>

<p class="flex items-center gap-2">
	<Icon icon={`font:icomoon icomoon-${skill?.icon}`} color={skill?.color} />
	<span>{capitalize(skill?.name)}</span>
</p>
<Tooltip label={capitalize($t(`level-skill.${message}`))}>
	<div class="progress">
		<div class="progress-bar" style={`width: ${skill?.level}%`}></div>
	</div>
</Tooltip>

<style lang="postcss">
	.progress {
		width: 100%;
		height: 0.5rem;
		background-color: var(--color-surface-variant);
		border-radius: 0.625rem;
		overflow: hidden;
		margin-top: 0.938rem;
		transition:
			width 0.5s,
			color 0.5s,
			background-color 0.5s;

		.progress-bar {
			height: 100%;
			background-color: var(--color-info);
		}
	}
</style>

<script lang="ts">
	import { Icon, Tooltip } from 'mytril/components';
	import { capitalize } from 'mytril/actions';

	let { skill } = $props();
	let message = $state('');

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
	<a href={skill?.url} target="_blank">
		<Icon icon="font:mgc_external_link_line" color="on-surface" size="sm" />
	</a>
</p>
<Tooltip label={capitalize(message)}>
	<div class="progress">
		<div class="progress-bar" style={`width: ${skill?.level}%`}></div>
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
		transition: width 0.5s;

		.progress-bar {
			height: 100%;
			background: var(--color-info);
		}
	}
</style>

<script lang="ts">
	import { Icon } from 'mytril';
	import { useCapitalize } from 'mytril/tools';
	import Progress from './progress.svelte';

	let { skill, type = 'code' } = $props();
</script>

<p class="code flex align-center">
	<Icon icon={`svg:icons/${type}/${skill.icon}`} color={skill.color} class="mr-2" sizeLg="md" />
	<span class="lg:text-md mr-2">{useCapitalize(skill.name)}</span>
	<a href={skill.url} class="external-link" target="_blank">
		<Icon size="xs" icon="svg:icons/app/external-link.svg" />
	</a>
</p>

{#if skill.level}
	<Progress level={skill.level} />
{/if}

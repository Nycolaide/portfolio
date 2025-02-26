<script lang="ts">
	import { numberDecorate } from '$lib/actions/number-decorate';
	import { capitalize } from 'mytril/actions';
	import { Divider, ListItem, ListItemSubtitle, ListItemTitle } from 'mytril/components';

	let { data, project } = $props();
</script>

<ListItem class="!mt-2 !mb-4 hover:!ms-8" href={project.url} target="_blank">
	<ListItemSubtitle class="!text-xs uppercase md:!text-sm">
		{project.description}
	</ListItemSubtitle>
	<ListItemTitle class="xs:!text-5xl !text-3xl md:!text-7xl">
		{capitalize(project.name)}
		<span class="xs:!text-lg !text-sm opacity-70 md:!text-2xl">
			{#if project.type === 'npm'}
				{numberDecorate(data?.api?.['npm']?.[project.name]?.downloads) || 0}
				{project.labelCounter}
			{:else if project.type === 'github'}
				{numberDecorate(data?.api?.['github']?.[project.name]?.followers) || 0}
				{project.labelCounter}
			{:else if project.type === 'hero'}
				{numberDecorate(data?.api?.['hero']?.followers) || 0} {project.labelCounter}
			{/if}
		</span>
	</ListItemTitle>
</ListItem>
<Divider color="on-background" opacity="1" />

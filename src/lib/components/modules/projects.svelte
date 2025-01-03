<script lang="ts">
	import { Divider, List, ListItem, ListItemTitle, ListSubheader } from 'mytril';

	let projects = $state([
		{ name: 'Mytril', url: '/', description: 'Svelte components library' },
		{ name: 'Minedelve', url: '/', description: 'Community developers' },
		{ name: 'Github', url: '/', description: 'See more on my' }
	]);
</script>

<div id="projects" class="mt-16">
	<List>
		<ListSubheader class="justify-center text-lg md:text-xl text-uppercase mb-10">
			Selected project
		</ListSubheader>

		{#each projects as { name, url, description }}
			<ListItem href={url} target="_blank">
				<span class="text-uppercase text-xs"> {description}</span>
				<ListItemTitle class="text-3xl sm:text-4xl md:text-6xl font-medium">{name}</ListItemTitle>
			</ListItem>
			<Divider />
		{/each}
	</List>
</div>

<style lang="scss">
	#projects {
		:global(.myt-list-item) {
			transition: margin-inline-start 0.3s;
			&:hover {
				margin-inline-start: 20px;
			}
		}
	}
</style>

<script lang="ts">
	import { githubMinedelve, githubProfile } from '$lib/stores/github';
	import { repositoryMytril } from '$lib/stores/npm';
	import { formatNumber } from '$lib/utils';
	import { Divider, List, ListItem, ListItemTitle, ListSubheader } from 'mytril';

	let projects = $state([
		{
			name: 'Mytril',
			url: 'https://minedelve.com/mytril',
			description: 'Svelte components library'
		},
		{ name: 'Minedelve', url: 'https://minedelve.com', description: 'Community developers' },
		{ name: 'Github', url: 'https://github.com/Nycolaide', description: 'See more on my' }
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
				<ListItemTitle>
					<p class="text-3xl sm:text-4xl md:text-6xl font-medium">
						{name}

						{#if name === 'Mytril' && $repositoryMytril !== null}
							<span class="text-md sm:text-lg md:text-xl counter">
								{formatNumber($repositoryMytril?.downloads)}
								<span>Downloads</span>
							</span>
						{/if}

						{#if (name === 'Github' && $githubProfile !== null) || (name === 'Minedelve' && $githubMinedelve !== null)}
							<span class="text-md sm:text-lg md:text-xl counter">
								{formatNumber(
									name === 'Github' ? $githubProfile?.followers : $githubMinedelve?.followers
								)}
								<span>Followers</span>
							</span>
						{/if}
					</p>
				</ListItemTitle>
			</ListItem>
			<Divider />
		{/each}
	</List>
</div>

<style lang="scss">
	#projects {
		padding: 0px 17px;
		:global(.myt-list-item) {
			transition: margin-inline-start 0.3s;
			&:hover {
				margin-inline-start: 20px;
			}
		}

		.counter {
			opacity: 0.7;
		}
	}
</style>

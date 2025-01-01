<script lang="ts">
	import { socials } from '$lib/stores/socialStore';
	import { AppBar, AppBarTitle, Btn, Divider, Icon, List, ListItem, Menu } from 'mytril';

	import menuSVG from '$lib/assets/icons/menu.svg';
	import socialSVG from '$lib/assets/icons/social.svg';

	let links: Array<{ name: string; url: string; icon: string }> = $state([]);

	$effect(() => {
		if (!$socials.loading) {
			links = $socials.data.filter((item: { name: string }) =>
				['npm', 'github'].includes(item.name)
			);
		}
	});
</script>

<AppBar contentClass="ga-2">
	<Btn class="sm:none" size="sm" icon text>
		<Icon icon={`svg:${menuSVG}`} />
	</Btn>
	<AppBarTitle class="font-black">N.</AppBarTitle>
	{#each links as { icon, url }}
		<Btn class="none sm:inline-flex" icon size="sm" href={url} target="_blank">
			<Icon icon={`svg:/icons/social/${icon}`} />
		</Btn>
	{/each}
	<Menu class="sm:none">
		<svelte:fragment slot="activator">
			<Btn icon size="sm">
				<Icon icon={`svg:${socialSVG}`} />
			</Btn>
		</svelte:fragment>

		<List dense>
			{#each links as { icon, url, name }}
				<ListItem size="sm" href={url} target="_blank">
					<svelte:fragment slot="prepend">
						<Icon icon={`svg:/icons/social/${icon}`} />
					</svelte:fragment>
					{name}
				</ListItem>
			{/each}
		</List>
	</Menu>
	<Divider vertical inset />
	<Btn href="https://minedelve.com/mytril" target="_blank">Mytril</Btn>
	<Btn outlined>Contact Me</Btn>
</AppBar>

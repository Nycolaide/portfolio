<script lang="ts">
	import { socials } from '$lib/stores/socialStore';
	import { AppBar, AppBarTitle, Btn, Divider, Icon, List, ListItem, Menu } from 'mytril';

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
	<!-- <Btn class="sm:none" density="comfortable" icon text>
		<Icon icon={`svg:${menuSVG}`} />
	</Btn> -->
	<AppBarTitle class="font-black">N.</AppBarTitle>
	{#each links as { icon, url }}
		<Btn icon density="comfortable" href={url} target="_blank" text>
			<Icon icon={`svg:/icons/social/${icon}`} />
		</Btn>
	{/each}
	<!--
	<Menu class="sm:none">
		<svelte:fragment slot="activator">
			<Btn icon density="comfortable">
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
	</Menu>-->
	<Divider vertical inset />
	<Btn class="none sm:flex" href="https://minedelve.com/mytril" target="_blank">Mytril</Btn>
	<Btn class="none sm:flex" outlined>Contact Me</Btn>
	<Menu class="sm:none me-5">
		<svelte:fragment slot="activator">
			<Btn icon density="comfortable" outlined>
				<Icon icon={`svg:icons/app/menu-right.svg`} />
			</Btn>
		</svelte:fragment>

		<List dense>
			<ListItem size="sm" href="https://minedelve.com/mytril" target="_blank">
				Mytril
				<svelte:fragment slot="append">
					<Icon size="sm" icon={`svg:icons/app/external-link.svg`} />
				</svelte:fragment>
			</ListItem>
			<ListItem size="sm">Contact Me</ListItem>
			<!-- <Divider />
			{#each links as { icon, url, name }}
				<ListItem size="sm" href={url} target="_blank">
					<svelte:fragment slot="prepend">
						<Icon icon={`svg:/icons/social/${icon}`} />
					</svelte:fragment>
					{name}
				</ListItem>
			{/each} -->
		</List>
	</Menu>
</AppBar>
<!-- 
<div class="fixed me-5" style="bottom: 80px; right: 0;">
	<Menu class="sm:none">
		<svelte:fragment slot="activator">
			<Btn rounded>
				Display my skills
				<Icon icon={`svg:icons/app/menu-right.svg`} />
			</Btn>
		</svelte:fragment>

		<List dense>
			<ListItem onclick={() => setRouteParams('modal', 'dev')}>Languages</ListItem>
			<ListItem onclick={() => setRouteParams('modal', 'tools')}>Environements</ListItem>
		</List>
	</Menu>
</div> -->

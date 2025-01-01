<script lang="ts">
	import { socials } from '$lib/stores/socialStore';
	import { AppBar, AppBarTitle, Btn, Divider, Icon } from 'mytril';

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
	<AppBarTitle class="font-black">N.</AppBarTitle>
	{#each links as { icon, url }}
		<Btn icon size="sm" href={url} target="_blank">
			<Icon icon={`svg:/icons/social/${icon}`} />
		</Btn>
	{/each}
	<Divider vertical inset />
	<Btn href="https://minedelve.com/mytril" target="_blank">Mytril</Btn>
	<Btn outlined>Contact Me</Btn>
</AppBar>

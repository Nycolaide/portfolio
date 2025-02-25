<script lang="ts">
	import { Corner } from '$lib/components/app';
	import { capitalize } from 'mytril/actions';
	import { Btn, Icon, List, ListItem, Menu } from 'mytril/components';

	const navigation = [
		{ name: 'projects', path: '/#projects' },
		{ name: 'about', path: '/#about' },
		{ name: 'skills', path: '/#skills' },
		{ name: 'contact', path: '/#contact' }
	];
</script>

<header class="fixed z-99 w-full">
	<div class="top-0 left-0 h-[0.625rem] w-full"></div>
	<div class="flex items-start justify-between">
		<div class="header-logo-wrapper h-[5rem] sm:rounded-ee-[2rem]">
			<Corner class="corner-bottom absolute bottom-[-1.813rem] left-[-1px]" />
			<Corner class="corner-top absolute top-[-1px] right-[-1.813rem]" />

			<a href="/">
				<div
					class="grid h-full grid-cols-[2.5rem_minmax(6.85rem,_1fr)] items-center gap-2 sm:gap-4"
				>
					<div class="text-center text-xl font-bold sm:text-4xl">N.</div>
					<div>
						<p class="font-bold">Nycolaide</p>
						<p class="text-xs opacity-85">Laurent Grimaldi</p>
					</div>
				</div>
			</a>
		</div>

		<div class="header-nav-wrapper relative h-[5rem] justify-end gap-4">
			<Corner
				class="corner-right-bottom absolute right-[-1px] bottom-[-1.813rem] sm:!hidden md:!block"
				right
			/>

			<Btn class="order-2 !hidden sm:!flex" icon circle>
				<Icon icon="font:mgc_full_moon_line" />
			</Btn>

			<Menu closeOnClick>
				{#snippet activator(model)}
					<Btn class="order-1 md:!hidden" onclick={model.toggle} rounded="pill">Menu</Btn>
				{/snippet}
				<List dense nav>
					{#each navigation as item}
						<ListItem href={item.path}>{capitalize(item.name)}</ListItem>
					{/each}
				</List>
			</Menu>

			<nav class="relative order-last flex hidden h-full items-center gap-2 !pl-2 md:!flex">
				<Corner class="corner-top absolute top-[-1px] left-[-1.813rem]" right />

				{#each navigation as item}
					<Btn href={item.path} variant="text" rounded="pill">{capitalize(item.name)}</Btn>
				{/each}
			</nav>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		width: 100%;
		margin: auto;
		max-width: 112.5rem;
		padding: 0 2.5rem;

		@media screen and (max-width: 40rem) {
			background-color: rgb(142, 97, 186);
		}

		> div:first-child {
			background-color: orangered;
		}

		.header-logo-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			background-color: orange;
		}
		.header-nav-wrapper {
			display: flex;
			align-items: center;

			width: 100%;

			nav {
				justify-content: space-between;
				background-color: orange;
				border-end-start-radius: 2rem;
			}
		}
	}
</style>

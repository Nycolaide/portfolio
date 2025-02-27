<script lang="ts">
	import { scrollToAnchor } from '$lib/actions/scroll-to-anchor';
	import { Corner } from '$lib/components/app';
	import { t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
	import { Btn, Divider, Icon, List, ListItem, Menu } from 'mytril/components';
	import { themeStore, setColorScheme } from 'mytril/stores';

	const navigation = [
		{ name: 'projects', path: 'projects' },
		{ name: 'about', path: 'about' },
		{ name: 'skills', path: 'skills' },
		{ name: 'contact', path: 'contact' }
	];
</script>

<header class="fixed z-99 w-full">
	<div>
		<div class="top-0 h-[0.625rem] w-full"></div>
		<div class="flex items-start justify-between">
			<div class="header-logo-wrapper h-[5rem] sm:rounded-ee-[2rem]">
				<Corner class="corner-bottom absolute bottom-[-1.813rem] left-[-1px]" />
				<Corner class="corner-top absolute top-[-1px] right-[-1.813rem]" />

				<a href="/">
					<div
						class="grid h-full grid-cols-[2.5rem_minmax(6.85rem,_1fr)] items-center gap-2 sm:gap-4"
					>
						<div>
							<img src="/logo.svg" alt="nycolaide logo" />
						</div>
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

				<Btn
					class="order-2 !hidden sm:!flex"
					icon
					circle
					onclick={() =>
						setColorScheme(
							$themeStore.colorScheme === 'system'
								? 'light'
								: $themeStore.colorScheme === 'light'
									? 'dark'
									: 'system'
						)}
				>
					{#if $themeStore.colorScheme === 'light'}
						<Icon icon="font:mgc_sun_line" />
					{:else if $themeStore.colorScheme === 'dark'}
						<Icon icon="font:mgc_full_moon_line" />
					{:else}
						<Icon icon="font:mgc_moonlight_line" />
					{/if}
				</Btn>

				<Menu closeOnClick>
					{#snippet activator(model)}
						<Btn
							class="order-1 !font-bold md:!hidden"
							onclick={(el: PointerEvent | HTMLElement) => model.toggle(el)}
							rounded="pill"
						>
							{capitalize($t('menu'))}
						</Btn>
					{/snippet}
					<List dense nav>
						{#each navigation as item}
							<ListItem onclick={() => scrollToAnchor(item.path)} class="font-bold">
								{capitalize($t(`navigation.${item.name}`))}
							</ListItem>
						{/each}
						<Divider />
						<Btn
							class="!mt-2 sm:!hidden"
							icon
							circle
							onclick={() =>
								setColorScheme(
									$themeStore.colorScheme === 'system'
										? 'light'
										: $themeStore.colorScheme === 'light'
											? 'dark'
											: 'system'
								)}
						>
							{#if $themeStore.colorScheme === 'light'}
								<Icon icon="font:mgc_sun_line" />
							{:else if $themeStore.colorScheme === 'dark'}
								<Icon icon="font:mgc_full_moon_line" />
							{:else}
								<Icon icon="font:mgc_moonlight_line" />
							{/if}
						</Btn>
					</List>
				</Menu>

				<nav class="relative order-last hidden h-full items-center gap-2 !pl-2 md:!flex">
					<Corner class="corner-top absolute top-[-1px] left-[-1.813rem]" right />

					{#each navigation as item}
						<Btn
							onclick={() => scrollToAnchor(item.path)}
							variant="text"
							rounded="pill"
							class="font-bold"
						>
							{capitalize($t(`navigation.${item.name}`))}
						</Btn>
					{/each}
				</nav>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		--padding: 1rem;

		@media screen and (min-width: 40rem) {
			--padding: 2.5rem !important;
		}

		&:before {
			content: '';
			background-color: var(--color-background);
			height: 134px;
			width: calc(100vw - (112.5rem + var(--padding) + var(--padding)));
			min-width: var(--padding);
			position: absolute;
			z-index: 100;
			border-bottom-right-radius: 12px;
			transition: background-color 0.5s;
		}

		&:after {
			content: '';
			background-color: var(--color-background);
			top: 0;
			right: 0;
			height: 134px;
			width: calc(100vw - (112.5rem + var(--padding) + var(--padding)));
			min-width: var(--padding);
			position: absolute;
			z-index: 100;
			border-bottom-left-radius: 12px;
			transition: background-color 0.5s;
		}

		> div {
			width: 100%;
			max-width: 112.5rem;
			padding: 0 var(--padding);
			margin: 0 auto;
			transition: padding 0.3s;

			@media screen and (max-width: 40rem) {
				background-color: var(--color-background);
				transition: background-color 0.5s;
			}

			> div:first-child {
				background-color: var(--color-background);
				transition: background-color 0.5s;
			}

			.header-logo-wrapper {
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;
				background-color: var(--color-background);
				transition: background-color 0.5s;
			}
			.header-nav-wrapper {
				display: flex;
				align-items: center;

				width: 100%;

				nav {
					justify-content: space-between;
					background-color: var(--color-background);
					transition: background-color 0.5s;
					border-end-start-radius: 2rem;
				}
			}
		}
	}
</style>

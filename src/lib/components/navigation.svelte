<script lang="ts">
	import { AppBar, Btn, Icon, Spacer, Toolbar } from 'mytril';
	import { useTheme, setTheme, useCapitalize } from 'mytril/tools';

	let navigation = $state([
		{ name: 'projects', link: '#projects' },
		{ name: 'about', link: '#about' },
		{ name: 'skills', link: '#skills' },
		{ name: 'contact', link: '#contact' }
	]);

	const toggleTheme = (type: string) => {
		const scheme = type === 'dark' ? 'light' : 'dark';
		localStorage.setItem('@nycolaide-shceme', scheme);
		setTheme(scheme);
	};
</script>

<div class="top-line"></div>
<AppBar color="transparent" class="mt-3" contentClass="overflow-initial">
	<div id="hero-logo" class="ms-8">
		<a href="/">
			<div class="logo-nycolaide grid pa-4 rounded-br-xl">
				<div class="text-2xl align-self-center font-black">N.</div>
				<div class="text-md">
					<span class="block">Laurent</span>
					<span class="block">Grimaldi</span>
				</div>
			</div>
		</a>
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-bottom" size="lg" color="background" />
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-top" size="lg" color="background" />
	</div>

	<Toolbar
		id="navigation-bar"
		class="none md:flex ms-2 px-2"
		dense
		contentClass="ga-2"
		rounded="pill"
	>
		{#each navigation as { name, link }}
			<Btn text rounded="pill" href={link}>
				{useCapitalize(name)}
			</Btn>
		{/each}

		<Btn outlined density="comfortable" rounded="pill" icon onclick={() => toggleTheme($useTheme)}>
			{#if $useTheme === 'dark'}
				<Icon icon="svg:icons/app/sun.svg" />
			{:else}
				<Icon icon="svg:icons/app/moon.svg" />
			{/if}
		</Btn>
	</Toolbar>

	<Spacer class="md:none" />

	<Btn class="me-10 md:none" rounded="pill" icon onclick={() => toggleTheme($useTheme)}>
		{#if $useTheme === 'dark'}
			<Icon icon="svg:icons/app/sun.svg" />
		{:else}
			<Icon icon="svg:icons/app/moon.svg" />
		{/if}
	</Btn>
</AppBar>

<style lang="scss">
	.top-line {
		position: fixed;
		top: 0;
		width: 100%;
		background: var(--myt-color-background);
		height: 12px;
		z-index: 1003;
		transition: background 0.5s;
	}

	:global(.overflow-initial) {
		overflow: initial !important;
	}

	:global(#navigation-bar) {
		width: fit-content;
		backdrop-filter: blur(10px) saturate(200%);
		background-color: color-mix(in oklab, var(--myt-color-background) 50%, transparent);
		border: 1px solid var(--myt-color-outline);
	}

	a {
		text-decoration: none;
		color: var(--myt-color-on-surface);
	}

	#hero-logo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: auto;
		position: relative;

		@media screen and (min-width: 840px) {
			margin-inline-start: 32px;
		}

		@media screen and (min-width: 1800px) {
			margin-inline-start: 83px;
		}

		:global(.svg-corner-bottom) {
			position: absolute;
			bottom: -28px;
			left: 0;
			transition:
				color 0.5s,
				background-color 0.5s;
		}

		:global(.svg-corner-top) {
			top: 0;
			position: absolute;
			right: -28px;
			transition:
				color 0.5s,
				background-color 0.5s;
		}

		.logo-nycolaide {
			grid-template-columns: 32px 68px;
			background-color: var(--myt-color-background);
			transition:
				color 0.5s,
				background-color 0.5s;

			div:last-child {
				line-height: 1.15rem;
			}
		}
	}
</style>

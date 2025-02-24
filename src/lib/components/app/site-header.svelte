<script lang="ts">
	import { Corner } from '$lib/components/app';
</script>

<header>
	<div class="top-0 left-0 h-[0.625rem] w-full"></div>
	<div class="flex items-start justify-between">
		<div class="header-logo-wrapper h-[5rem]">
			<Corner class="corner-bottom absolute bottom-[-1.813rem] left-[-1px]" />
			<Corner class="corner-top absolute top-[-1px] right-[-1.813rem]" />

			<div class="grid h-full grid-cols-[2.5rem_minmax(6.25rem,_1fr)] gap-4">
				<div>Logo</div>
				<div>Hero name</div>
			</div>
		</div>

		<div class="header-nav-wrapper h-[5rem]">
			<Corner class="corner-bottom absolute right-[-1px] bottom-[-1.813rem]" right />
			<Corner class="corner-top absolute top-[-1px] left-[-1.813rem]" right />

			<nav>Navigation</nav>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		width: 100%;
		margin: auto;
		max-width: 112.5rem;
		padding: 0 2.5rem;

		.header-logo-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			background-color: orange;
			border-end-end-radius: 2rem;
		}
		.header-nav-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			background-color: orange;
			border-end-start-radius: 2rem;
		}
	}
</style>

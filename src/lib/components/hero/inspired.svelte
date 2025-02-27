<script lang="ts">
	import { users } from '$lib/stores';
	import { Img } from 'mytril/components';
</script>

<div class="wrapper">
	<div class="flex w-full gap-3">
		{#each $users as user}
			<div class="animation-float w-[5rem]">
				<Img
					class="rounded-full border-2 border-neutral-400"
					src={`/images/users/${user.picture}`}
				/>
				<p class="text-center text-xs">{user.name}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.wrapper {
		--padding: 1rem;
		--padding-n: -1rem;
		width: calc(100% + var(--padding) + var(--padding));
		margin-left: var(--padding-n);
		overflow-y: auto;
		padding: 25px 0;

		@media screen and (min-width: 40rem) {
			--padding: 2.5rem;
			--padding-n: -2.5rem;
		}

		> div {
			width: fit-content;
			margin: 0 auto;

			> div:nth-child(1) {
				top: 8px;
				animation: float 4.5s infinite;
			}
			> div:nth-child(3n) {
				top: 5px;
				animation: float 5.5s infinite;
			}
			> div:nth-child(4n) {
				top: -8px;
				animation: float 7.5s infinite;
			}
			> div:nth-child(5n) {
				top: 3px;
				animation: float 6.5s infinite;
			}
		}
	}
</style>

<script lang="ts">
	import { setRouteParams } from '$lib/helpers';
	import { Btn, Grid, GridCol, GridRow } from 'mytril';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Grid fluid>
	<GridRow class="align-center" style="min-height: calc(100vh - (64px * 2))">
		<GridCol offsetMd="1" md="5">
			<h1 class="font-black mb-1">Laurent Grimaldi</h1>
			<p class="font-light mb-3">@Nycolaide</p>
			<p>Hi, I’m a front-end engineer and a creator on my library component for Svelte</p>
			<p>
				<Btn onclick={() => setRouteParams('modal', 'dev')}>Languages</Btn>
				<Btn onclick={() => setRouteParams('modal', 'tools')}>Environements</Btn>
			</p>
		</GridCol>
	</GridRow>
</Grid>

<div class="element-test">
	<div class="element-test__child" style="height: 70vh; width: 100%">1</div>
</div>

<script lang="ts">
	import { Grid, GridCol, GridRow } from 'mytril';

	// modules
	import Projects from '../lib/components/modules/projects.svelte';
	import Hero from '../lib/components/modules/hero.svelte';
	import Contacts from '../lib/components/modules/contacts.svelte';
	import Skills from '../lib/components/modules/skills.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<Grid>
	<GridRow>
		<GridCol>
			<Projects />
		</GridCol>
	</GridRow>
	<GridRow>
		<GridCol>
			<Hero />
		</GridCol>
	</GridRow>
	<GridRow>
		<GridCol>
			<Skills />
		</GridCol>
	</GridRow>
	<GridRow>
		<GridCol>
			<Contacts />
		</GridCol>
	</GridRow>
</Grid>

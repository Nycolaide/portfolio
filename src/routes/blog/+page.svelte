<script lang="ts">
	import Resume from '$lib/components/articles/resume.svelte';
	import { AppBar, AppBarTitle, Btn, Card, Grid, GridCol, GridRow, Spacer } from 'mytril';
</script>

<AppBar>
	<AppBarTitle>
		<h1>Blog</h1>
		<p>Nycolaide Technology intelligence</p>
	</AppBarTitle>
	<Spacer />
	<Btn href="/">Return to Home</Btn>
</AppBar>

<Grid class="mt-16">
	<GridRow>
		<GridCol cols="12">
			<Resume />
		</GridCol>
	</GridRow>
	<GridRow>
		<GridCol cols="12">Other posts</GridCol>
	</GridRow>
	<GridRow>
		<GridCol cols="12" sm="6">
			<Card tag="div">article</Card>
		</GridCol>
		<GridCol cols="12" sm="6">
			<Card tag="div">article</Card>
		</GridCol>
	</GridRow>
</Grid>

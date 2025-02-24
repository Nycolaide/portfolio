<script lang="ts">
	import { Corner, ProgressBar } from '$lib/components/app';
	import {
		Btn,
		Card,
		CardText,
		CardTitle,
		Divider,
		Grid,
		GridCol,
		GridRow,
		Img,
		List,
		ListItem,
		ListItemSubtitle,
		ListItemTitle,
		ListSubheader
	} from 'mytril/components';

	let { data } = $props();

	console.log('+page.svelte', data);
</script>

<div class="hero-container">
	<Img src="images/background.png" cover class="overflow-hidden" absolute />

	<div
		class="hero-title absolute bottom-0 flex h-[18.75rem] w-full max-w-[50%] flex-col items-start"
	>
		<Corner class="corner-bottom absolute right-[-1.813rem] bottom-[-1px] rotate-[-90deg]" />
		<Corner class="corner-top absolute top-[-1.813rem] left-[-1px] rotate-[-90deg]" />
		<div class="title">Développeur Web passionné et joueur à ses heures perdu</div>
	</div>

	<div class="hero-social absolute top-[50%] right-[2.5rem] h-[6.25rem]">
		<Corner class="corner-bottom absolute right-[-1px] bottom-[-1.813rem] rotate-[90deg]" />
		<Corner class="corner-top absolute top-[-1.813rem] right-[-1px] rotate-[180deg]" />
		<div class="grid">
			<p>reddit</p>
			<p>discord</p>
			<p>twitter</p>
		</div>
	</div>
</div>

<div class="projects">
	<List>
		<ListSubheader>Mes projets</ListSubheader>
		<ListItem>
			<ListItemSubtitle class="!uppercase">Svelte</ListItemSubtitle>
			<ListItemTitle class="!text-7xl">
				Project
				<span class="text-2xl opacity-70">5.9k Downloads</span>
			</ListItemTitle>
		</ListItem>
		<Divider color="on-background" opacity="1" />
	</List>
</div>

<div class="about">
	<Grid>
		<GridRow>
			<GridCol>
				<p>Laurent</p>
				<p>@nycolaide • 1995</p>
				<Divider />
				<p>
					Développeur FrontEnd en React.js, Svelte et Vue.js. Fondateur de Minedelve et créateur de
					la llibrairie de composants Svelte Mytril. Et gamer à mes heures perdue.
				</p>
				<Btn>Contact Me</Btn>
			</GridCol>
			<GridCol>
				<GridRow>
					<GridCol cols="12">
						<Img src="images/nycolaide.png" />
						<Card>
							<CardText class="flex">
								<p>1 Counter</p>
								<p>2 Counter</p>
								<p>3 Counter</p>
							</CardText>
						</Card>
					</GridCol>
					<GridCol cols="12" class="flex">
						<p>tag 1</p>
						<p>tag 2</p>
						<p>tag 3</p>
						<p>tag 4</p>
						<p>tag 5</p>
					</GridCol>
				</GridRow>
			</GridCol>
		</GridRow>
	</Grid>
</div>

<div class="skills">
	<Grid>
		<GridRow>
			<GridCol cols="12" md="6">
				<Card>
					<CardTitle>Framework</CardTitle>
					<Grid>
						<GridRow>
							<GridCol cols="12" sm="6" xl="3">
								<p>React</p>
								<ProgressBar level="30" />
							</GridCol>
						</GridRow>
					</Grid>
				</Card>
			</GridCol>
			<GridCol cols="12" md="6">content 2</GridCol>
		</GridRow>
	</Grid>
</div>

<Card>
	<CardText>Créons ensemble quelque chose de d'extraordinaire !</CardText>
	<Grid>
		<GridRow>
			<GridCol cols="12" sm="6">
				<p>Retrouvez moi sur:</p>
				<div class="flex">
					<p>GitHub</p>
					<p>Npm</p>
					<p>LinkedIn</p>
				</div>
			</GridCol>
			<GridCol cols="12" sm="6">
				<Btn>C'est partie !</Btn>
				<a href="/">laurent@nycolaide.dev</a>
			</GridCol>
		</GridRow>
	</Grid>
</Card>

<style lang="postcss">
	.hero-container {
		display: flex;
		justify-content: space-between;
		gap: 0.6em;
		min-height: 39.375rem;
		height: 95vh;

		.hero-title {
			background-color: yellowgreen;
			border-start-end-radius: 1.875rem;
		}

		.hero-social {
			background-color: paleturquoise;
			border-start-start-radius: 1.875rem;
			border-end-start-radius: 1.875rem;
		}
	}
</style>

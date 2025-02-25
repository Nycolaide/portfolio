<script lang="ts">
	import { numberDecorate } from '$lib/actions/number-decorate';
	import { Corner, SectionTitle } from '$lib/components/app';
	import { Skill } from '$lib/components/hero';
	import { capitalize } from 'mytril/actions';
	import {
		Btn,
		Card,
		CardText,
		CardTitle,
		Divider,
		Grid,
		GridCol,
		GridRow,
		Icon,
		Img,
		List,
		ListItem,
		ListItemSubtitle,
		ListItemTitle
	} from 'mytril/components';

	let { data } = $props();
	const columns = [
		['frameworks', 'languages', 'runtime', 'css-tools'],
		['cli-tools', 'database', 'cms', 'tools']
	];

	console.log('+page.svelte', data);
</script>

<div class="hero-container relative">
	<Img src="images/background.png" cover class="overflow-hidden rounded-[2rem]" absolute />

	<div
		class="hero-title absolute bottom-0 flex h-[18.75rem] w-full max-w-[55%] flex-col items-start justify-between gap-2 !p-4 sm:max-w-[50%]"
	>
		<Corner class="corner-bottom absolute right-[-1.813rem] bottom-[-1px] rotate-[-90deg]" />
		<Corner class="corner-top absolute top-[-1.813rem] left-[-1px] rotate-[-90deg]" />
		<div class="xs:text-3xl text-2xl sm:text-4xl lg:text-5xl">
			Développeur Web passionné et joueur à ses heures perdu
		</div>
		<div class="actions">
			<Btn icon circle href="/#about">
				<Icon icon="font:mgc_arrow_down_fill" />
			</Btn>
		</div>
	</div>
</div>

<SectionTitle>Mes projets</SectionTitle>
<div class="projects">
	<List>
		{#each data?.projects as project}
			<ListItem class="!mt-2 !mb-4 hover:!ms-8" href={project.url} target="_blank">
				<ListItemSubtitle class="!text-xs uppercase md:!text-sm">
					{project.description}
				</ListItemSubtitle>
				<ListItemTitle class="xs:!text-5xl !text-3xl md:!text-7xl">
					{capitalize(project.name)}
					<span class="xs:!text-lg !text-sm opacity-70 md:!text-2xl">
						{#if project.type === 'npm'}
							{numberDecorate(data?.api['npm'][project.name]?.downloads) || 0}
							{project.labelCounter}
						{:else if project.type === 'github'}
							{numberDecorate(data?.api['github'][project.name]?.followers) || 0}
							{project.labelCounter}
						{:else if project.type === 'hero'}
							{numberDecorate(data?.api['hero']?.followers) || 0} {project.labelCounter}
						{/if}
					</span>
				</ListItemTitle>
			</ListItem>
			<Divider color="on-background" opacity="1" />
		{/each}
	</List>
</div>

<div class="about !mt-[4rem] !mb-[4rem]">
	<Grid>
		<GridRow>
			<GridCol cols="12" order="2" sm="6" md="6">
				<p class="text-2xl font-bold">Laurent</p>
				<p class="font-light">@nycolaide • <span class="opacity-80">1995</span></p>
				<Divider opacity="1" class="!mt-2 !mb-5" />
				<p>
					Développeur FrontEnd en React.js, Svelte et Vue.js. Fondateur de Minedelve et créateur de
					la librairie de composants Svelte Mytril. Et gamer à mes heures perdue.
				</p>
				<Btn class="!mt-4 max-sm:w-full" rounded="pill" size="lg" href="/#contact">Contact Me</Btn>
			</GridCol>
			<GridCol cols="12" sm="6" md="6" order="1">
				<GridRow>
					<GridCol cols="12">
						<Img
							class="w-[10rem] rotate-[-6deg] rounded-4xl"
							src={data?.api?.hero?.avatar_url || 'images/nycolaide.png'}
						/>
						<Card class="-top-4 max-w-[21.875rem]">
							<CardText class="grid grid-cols-3 gap-2">
								<div>
									<div class="!ms-1 font-bold">
										{data?.api?.hero?.public_repos || 0}
									</div>
									<p class="flex items-center gap-1 text-xs">
										<Icon icon="font:mgc_package_line" />
										public_repos
									</p>
								</div>
								<div>
									<div class="!ms-1 font-bold">
										{data?.api?.hero?.followers || 0}
									</div>
									<p class="flex items-center gap-1 text-xs">
										<Icon icon="font:mgc_group_line" />
										followers
									</p>
								</div>
								<div>
									<div class="!ms-1 font-bold">
										{data?.api?.hero?.following || 0}
									</div>
									<p class="flex items-center gap-1 text-xs">
										<Icon icon="font:mgc_user_heart_line" />
										following
									</p>
								</div>
							</CardText>
						</Card>
					</GridCol>
				</GridRow>
			</GridCol>
		</GridRow>
	</Grid>
</div>

<SectionTitle>Compétences</SectionTitle>
<div class="skills">
	<Grid>
		<GridRow>
			{#each columns as column}
				<GridCol cols="12" md="6" class="!pt-0 !pb-0">
					{#each column as category}
						<Card rounded="2xl" class="!mt-4 !p-6">
							<CardTitle>{capitalize(category)}</CardTitle>
							<Grid>
								<GridRow>
									{#each data?.skills?.[category] as skill}
										<GridCol cols="12" sm="6">
											<Skill {skill} />
										</GridCol>
									{/each}
								</GridRow>
							</Grid>
						</Card>
					{/each}
				</GridCol>
			{/each}
		</GridRow>
	</Grid>
</div>

<div class="contact">
	<Card class="!mt-[7rem] flex flex-col justify-between sm:!p-10 lg:!p-16" rounded="2xl">
		<CardText
			class="xs:!text-3xl min-h-[12rem] text-center !text-xl font-bold max-sm:!mt-10 sm:max-w-[80%] sm:text-start  sm:!text-3xl lg:max-w-[40.625rem]  lg:!text-5xl"
		>
			Créons ensemble quelque chose de d'extraordinaire !
		</CardText>
		<Grid>
			<GridRow>
				<GridCol class="text-center sm:text-start" cols="12" sm="6">
					<p>Retrouvez moi sur:</p>
					<div class="!mt-4 flex justify-center gap-2 sm:justify-start">
						{#each Object.entries(data?.social) as [, platform]}
							<Btn icon circle variant="outline" href={platform.url} target="_blank">
								<Icon icon={`font:${platform.icon}`} />
							</Btn>
						{/each}
					</div>
				</GridCol>
				<GridCol cols="12" sm="6" class="text-center sm:relative sm:top-[20px] sm:text-end">
					<Btn size="lg" rounded="pill" class="max-sm:w-full sm:!ms-auto" block>C'est parti !</Btn>
					<a href="mailto:laurent@nycolaide.dev" class="text-sm opacity-70">
						laurent@nycolaide.dev
					</a>
				</GridCol>
			</GridRow>
		</Grid>
	</Card>
</div>

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
	}

	.projects,
	.skills,
	.about {
		max-width: 67.5rem;
		margin: 0 auto;
	}

	.projects :global(.myt-list-item) {
		transition: margin-inline-start 0.3s;
	}
</style>

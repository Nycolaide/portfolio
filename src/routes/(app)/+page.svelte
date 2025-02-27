<script lang="ts">
	import { scrollToAnchor } from '$lib/actions/scroll-to-anchor.js';
	import { Corner, SectionTitle } from '$lib/components/app';
	import Seo from '$lib/components/app/seo.svelte';
	import { AboutMe, Project, Skill, Profil } from '$lib/components/hero';
	import Inspired from '$lib/components/hero/inspired.svelte';
	import { projects, skills, socials, t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
	import {
		Btn,
		Card,
		CardActions,
		CardText,
		CardTitle,
		Grid,
		GridCol,
		GridRow,
		Icon,
		Img,
		List,
		Spacer
	} from 'mytril/components';

	let { data } = $props();
	let openAboutMe = $state(false);
	let openSelectSkill: null | { name: string; description: string; icon: string } = $state(null);
	const columns = [
		['frameworks', 'languages', 'runtime', 'css-tools'],
		['cli-tools', 'database', 'cms', 'tools']
	];

	const title = 'Développeur Front-End |  Nycolaide - Laurent Grimaldi';
	const description =
		'Nycolaide développeur Front End, spécialisé dans les techno React.js, Vue et Svelte. Fondateur de Minedelve et de la librairie de composants Mytril';
	const openGraph = {
		title: title,
		description: description
	};
</script>

<Seo {title} {description} {openGraph} />

<div class="hero-container relative">
	<Img src="images/background.png" cover class="overflow-hidden rounded-[2rem]" absolute />

	<div
		class="hero-title absolute bottom-0 flex w-full max-w-[55%] flex-col items-start justify-between gap-6 !p-4 sm:max-w-[50%] lg:max-w-[40%]"
	>
		<Corner class="corner-bottom absolute right-[-1.813rem] bottom-[-1px] rotate-[-90deg]" />
		<Corner class="corner-top absolute top-[-1.813rem] left-[-1px] rotate-[-90deg]" />
		<div class="xs:text-3xl text-2xl sm:text-4xl lg:text-5xl">
			{capitalize($t('hero.introduction'))}
		</div>
		<div class="actions">
			<Btn icon circle onclick={() => scrollToAnchor('about')} background="primary">
				<Icon icon="font:mgc_arrow_down_fill" color="on-primary" />
			</Btn>
		</div>
	</div>
</div>

<SectionTitle>{capitalize($t('heading.projects'))}</SectionTitle>

<List id="projects" class="projects ! !mr-auto !ml-auto max-w-[67.5rem] !pb-[4rem]">
	{#each $projects as project}
		<Project {data} {project} />
	{/each}
</List>

<Grid id="about" class="about !mr-auto !ml-auto max-w-[67.5rem] !pt-[4rem]">
	<GridRow>
		<GridCol cols="12" order="2" sm="6" md="6">
			<Card rounded="4xl">
				<CardText>
					<p>{capitalize($t('hero.bio'))}</p>
				</CardText>
				<CardActions>
					<Btn
						rounded="pill"
						size="lg"
						onclick={() => scrollToAnchor('contact')}
						background="primary"
						color="on-primary"
					>
						{capitalize($t('hero.contact.contact-me'))}
					</Btn>
					<Spacer />
					<!-- <Btn icon circle onclick={() => (openAboutMe = true)} background="primary">
						<span class={`transition-rotate ${openAboutMe ? 'rotate-[45deg]' : ''}`}>
							<Icon icon="font:mgc_add_fill" color="on-primary" />
						</span>
					</Btn> -->
				</CardActions>
			</Card>
		</GridCol>
		<GridCol cols="12" sm="6" md="6" order="first">
			<GridRow>
				<GridCol cols="12">
					<Profil {data} />
				</GridCol>
			</GridRow>
		</GridCol>
	</GridRow>
</Grid>

<SectionTitle>{capitalize($t('heading.inspired'))}</SectionTitle>

<Inspired />

<SectionTitle>{capitalize($t('heading.skills'))}</SectionTitle>

<Grid id="skills" class="!mr-auto !ml-auto max-w-[67.5rem] !pt-[2rem] !pb-[4rem]">
	<GridRow>
		{#each columns as column}
			<GridCol cols="12" md="6" class="!pt-0 !pb-0">
				{#each column as category}
					<Card rounded="4xl" class="!mt-4 !p-6">
						<CardTitle>
							{capitalize($t(`hero.categories.${category}`))}
						</CardTitle>

						<Grid>
							<GridRow class="z-10">
								{#each $skills?.[category] as skill}
									<GridCol cols="12" sm="6">
										<Skill {skill} bind:select={openSelectSkill} />
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

<div class="!mb-6 w-full text-center text-4xl opacity-10">
	<p class="font-bold">Chaussette !</p>
</div>

<Card
	id="contact"
	class="pattern-dot-linear-45  !mr-auto !ml-auto flex max-w-[67.5rem] flex-col justify-between sm:!p-10 lg:!p-16"
	rounded="2xl"
	background="#ff637e"
	color="white"
>
	<CardText
		class="xs:!text-3xl min-h-[12rem] text-center !text-xl font-bold max-sm:!mt-10 sm:max-w-[80%] sm:text-start  sm:!text-3xl lg:max-w-[41.5rem] lg:!text-5xl"
	>
		{capitalize($t('hero.contact.message'))}
	</CardText>
	<Grid>
		<GridRow>
			<GridCol class="text-center sm:text-start" cols="12" sm="6">
				<p>{capitalize($t('hero.contact.follow-us'))}:</p>
				<div class="!mt-4 flex justify-center gap-2 sm:justify-start">
					{#each Object.entries($socials ?? {}) as [, platform]}
						<Btn icon circle variant="outline" href={platform.url} target="_blank" color="white">
							<Icon icon={`font:${platform.icon}`} color="white" />
						</Btn>
					{/each}
				</div>
			</GridCol>
			<GridCol cols="12" sm="6" class="text-center sm:relative sm:top-[20px] sm:text-end">
				<Btn
					size="lg"
					rounded="pill"
					class="max-sm:w-full sm:!ms-auto sm:w-fit"
					block
					href="mailto:laurent@nycolaide.dev"
				>
					{capitalize($t('hero.contact.lets-go'))}

					{#snippet append()}
						<Icon icon="font:mgc_cookie_line" />
					{/snippet}
				</Btn>
				<a href="mailto:laurent@nycolaide.dev" class="text-sm opacity-70">
					laurent@nycolaide.dev
				</a>
			</GridCol>
		</GridRow>
	</Grid>
</Card>

<AboutMe bind:open={openAboutMe} />

<style lang="postcss">
	.hero-container {
		display: flex;
		justify-content: space-between;
		gap: 0.6em;
		min-height: 39.375rem;
		height: 95vh;

		.hero-title {
			background-color: var(--color-background);
			border-start-end-radius: 1.875rem;
			transition: background-color 0.5s;
		}
	}

	:global(.projects) :global(.myt-list-item) {
		transition: margin-inline-start 0.3s;
		background-color: transparent;

		&:hover {
			background-color: transparent !important;
		}
	}

	.transition-rotate {
		transition: rotate 0.3s;
	}

	:global(.card-more),
	.card-more {
		width: 112%;
		margin-left: -42px;
		height: 114%;
		background-color: var(--color-surface-variant);
		color: var(--color-on-surface-variant);
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>

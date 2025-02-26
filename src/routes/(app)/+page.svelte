<script lang="ts">
	import { Corner, SectionTitle } from '$lib/components/app';
	import Seo from '$lib/components/app/seo.svelte';
	import { Project, Skill } from '$lib/components/hero';
	import { projects, skills, socials, t } from '$lib/stores';
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
		List
	} from 'mytril/components';

	let { data } = $props();
	const columns = [
		['frameworks', 'languages', 'runtime', 'css-tools'],
		['cli-tools', 'database', 'cms', 'tools']
	];
</script>

<Seo title="Nycolaide - FrontEnd developer Portfolio" />

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
			<Btn icon circle href="/#about" background="primary">
				<Icon icon="font:mgc_arrow_down_fill" color="on-primary" />
			</Btn>
		</div>
	</div>
</div>

<SectionTitle>{capitalize($t('heading.projects'))}</SectionTitle>

<List id="projects" class="projects !mr-auto !ml-auto max-w-[67.5rem] !pt-[4rem] !pb-[4rem]">
	{#each $projects as project}
		<Project {data} {project} />
	{/each}
</List>

<Grid id="about" class="about !mr-auto !ml-auto max-w-[67.5rem] !pt-[4rem] !pb-[4rem]">
	<GridRow>
		<GridCol cols="12" order="2" sm="6" md="6">
			<p class="text-2xl font-bold">Laurent</p>
			<p class="font-light">@nycolaide • <span class="opacity-80">1995</span></p>
			<Divider opacity="1" class="!mt-2 !mb-5" />
			<p>{capitalize($t('hero.bio'))}</p>
			<Btn
				class="!mt-4 max-sm:w-full"
				rounded="pill"
				size="lg"
				href="/#contact"
				background="primary"
				color="on-primary"
			>
				{capitalize($t('hero.contact.contact-me'))}
			</Btn>
		</GridCol>
		<GridCol cols="12" sm="6" md="6" order="1">
			<GridRow>
				<GridCol cols="12">
					<Img
						class="w-[10rem] rotate-[-6deg] rounded-4xl border-6 border-neutral-400"
						src={'images/nycolaide.png'}
					/>
					<Card class="-top-4 max-w-[21.875rem]" background="primary" color="on-primary">
						<CardText class="grid grid-cols-3 gap-2">
							<div>
								<div class="!ms-1 font-bold">
									{data?.api?.hero?.public_repos || 0}
								</div>
								<p class="flex items-center gap-1 text-xs">
									<Icon icon="font:mgc_package_line" color="on-primary" />
									{capitalize($t('hero.counters.public_repos'))}
								</p>
							</div>
							<div>
								<div class="!ms-1 font-bold">
									{data?.api?.hero?.followers || 0}
								</div>
								<p class="flex items-center gap-1 text-xs">
									<Icon icon="font:mgc_group_line" color="on-primary" />
									{capitalize($t('hero.counters.followers'))}
								</p>
							</div>
							<div>
								<div class="!ms-1 font-bold">
									{data?.api?.hero?.following || 0}
								</div>
								<p class="flex items-center gap-1 text-xs">
									<Icon icon="font:mgc_user_heart_line" color="on-primary" />
									{capitalize($t('hero.counters.following'))}
								</p>
							</div>
						</CardText>
					</Card>
				</GridCol>
			</GridRow>
		</GridCol>
	</GridRow>
</Grid>

<SectionTitle>{capitalize($t('heading.skills'))}</SectionTitle>

<Grid id="skills" class="!mr-auto !ml-auto max-w-[67.5rem] !pt-[2rem] !pb-[4rem]">
	<GridRow>
		{#each columns as column}
			<GridCol cols="12" md="6" class="!pt-0 !pb-0">
				{#each column as category}
					<Card rounded="2xl" class="!mt-4 !p-6">
						<CardTitle>{capitalize($t(`hero.categories.${category}`))}</CardTitle>
						<Grid>
							<GridRow>
								{#each $skills?.[category] as skill}
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

<Card
	id="contact"
	class="pattern-dot-linear-45 !mt-[7rem] !mr-auto !ml-auto flex max-w-[67.5rem] flex-col justify-between sm:!p-10 lg:!p-16"
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
					class="max-sm:w-full sm:!ms-auto"
					block
					href="mailto:laurent@nycolaide.dev"
				>
					{capitalize($t('hero.contact.lets-go'))}
				</Btn>
				<a href="mailto:laurent@nycolaide.dev" class="text-sm opacity-70">
					laurent@nycolaide.dev
				</a>
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
</style>

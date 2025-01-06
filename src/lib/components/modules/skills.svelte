<script lang="ts">
	import {
		Card,
		CardText,
		Divider,
		Grid,
		GridCol,
		GridRow,
		Icon,
		List,
		ListSubheader
	} from 'mytril';
	import json from '$lib/assets/hero.json';
	import Progress from '$lib/components/progress.svelte';
	import { useCapitalize } from 'mytril/tools';
</script>

<div id="skills" class="mt-5">
	<List>
		<ListSubheader class="justify-center text-lg md:text-xl text-uppercase mb-5">
			Skills
		</ListSubheader>
	</List>

	<Grid>
		<GridRow>
			<GridCol>
				<Card color="surface-container" rounded="xl">
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['front-end'] as { name, level, icon, color, url }}
									<GridCol cols="8" sm="6" md="4" lg="3">
										<p class="code">
											<Icon icon={`svg:icons/code/${icon}`} {color} class="mr-2" />
											{useCapitalize(name)}
											<a href={url} class="external-link" target="_blank">
												<Icon
													size="xs"
													icon="svg:icons/app/external-link.svg"
													class="float-right"
												/>
											</a>
										</p>
										<Progress {level} />
									</GridCol>
								{/each}
								<Divider class="my-4" inset />
								{#each json?.['back-end'] as { name, level, icon, color, url }}
									<GridCol cols="8" sm="6" md="4" lg="3">
										<p class="code">
											<Icon icon={`svg:icons/code/${icon}`} {color} class="mr-2" />
											{useCapitalize(name)}
											<a href={url} class="external-link" target="_blank">
												<Icon
													size="xs"
													icon="svg:icons/app/external-link.svg"
													class="float-right"
												/>
											</a>
										</p>
										<Progress {level} />
									</GridCol>
								{/each}
								<Divider class="my-4" inset />
								{#each json?.['cms'] as { name, level, icon, color, url }}
									<GridCol cols="8" sm="6" md="4" lg="3">
										<p class="code">
											<Icon icon={`svg:icons/cms/${icon}`} {color} class="mr-2" />
											{useCapitalize(name)}
											<a href={url} class="external-link" target="_blank">
												<Icon
													size="xs"
													icon="svg:icons/app/external-link.svg"
													class="float-right"
												/>
											</a>
										</p>
										<Progress {level} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>
			</GridCol>
		</GridRow>
	</Grid>
</div>

<style lang="scss">
	.code:hover {
		.external-link {
			display: initial;
		}
	}

	.external-link {
		display: none;
	}

	:global(#skills) {
		:global(.myt-card) {
			margin-right: 1px;
			margin-left: 1px;
		}
	}
</style>

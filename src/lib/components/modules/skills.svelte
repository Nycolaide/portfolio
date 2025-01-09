<script lang="ts">
	import {
		Card,
		CardText,
		CardTitle,
		Divider,
		Grid,
		GridCol,
		GridRow,
		List,
		ListSubheader
	} from 'mytril';
	import json from '$lib/assets/hero.json';
	import SkillPreview from '../skill-preview.svelte';
</script>

<div id="skills" class="mt-5">
	<List>
		<ListSubheader class="justify-center text-lg md:text-xl text-uppercase mb-5">
			Skills
		</ListSubheader>
	</List>

	<Grid>
		<GridRow>
			<GridCol cols="12" md="6">
				<Card class="h-100">
					<CardTitle>Front-end</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['front-end'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>
			</GridCol>
			<GridCol cols="12" md="6">
				<Card>
					<CardTitle>Back-end</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['back-end'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>

				<Card class="mt-5">
					<CardTitle>Others</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['cms'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} type="cms" />
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
	:global(#skills) {
		:global(.myt-card) {
			margin-right: 1px;
			margin-left: 1px;
		}
	}
</style>

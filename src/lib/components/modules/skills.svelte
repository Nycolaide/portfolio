<script lang="ts">
	import { Card, CardText, CardTitle, Grid, GridCol, GridRow, List, ListSubheader } from 'mytril';
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
				<Card>
					<CardTitle>Framework</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['frameworks'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>
				<Card class="mt-5">
					<CardTitle>Languages</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['languages'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>

				<Card class="mt-5">
					<CardTitle>Runtime</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['runtime'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>

				<Card class="mt-5">
					<CardTitle>CSS tools</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['css-tools'] as skill}
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
					<CardTitle>CLI tools</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['cli-tools'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} />
									</GridCol>
								{/each}
							</GridRow>
						</Grid>
					</CardText>
				</Card>

				<Card class="mt-5">
					<CardTitle>Databases</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['database'] as skill}
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

				<Card class="mt-5">
					<CardTitle>Developers tools</CardTitle>
					<CardText>
						<Grid>
							<GridRow>
								{#each json?.['tools'] as skill}
									<GridCol cols="12" sm="6" xl="3">
										<SkillPreview {skill} type="tools" />
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

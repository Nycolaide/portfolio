<script lang="ts">
	import { Btn, Card, CardActions, CardText, Icon } from 'mytril';
</script>

<div class="box-card absolute" style="bottom: 0;">
	<Card
		color="background"
		class="rounded-tl rounded-br rounded-bl rounded-tr-xl"
		style="overflow: initial;"
	>
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-top" size="lg" color="background" />
		<CardText>
			<p class="text-2xl font-regular">
				Developer and gamer with a passion for creating and exploring
			</p>
		</CardText>
		<CardActions>
			<Btn rounded="pill" icon href="#about" color="on-surface">
				<Icon icon="svg:icons/app/arrow-bottom.svg" size="lg" color="surface" />
			</Btn>
		</CardActions>
		<Icon icon="svg:icons/app/corner.svg" class="svg-corner-bottom" size="lg" color="background" />
	</Card>
</div>

<style lang="scss">
	.box-card {
		max-width: 50%;

		@media screen and (max-width: 790px) {
			max-width: 85%;
		}

		:global(.myt-card) {
			outline-color: var(--myt-color-background) !important;
			outline-width: 1px !important;
			outline-offset: 0;
			outline-style: solid !important;
		}

		:global(.svg-corner-top) {
			position: absolute;
			top: -29px;
			left: -1px;
			transform: rotate(-90deg);
			transition:
				color 0.5s,
				background-color 0.5s,
				border-color 0.5s;
		}

		:global(.svg-corner-bottom) {
			position: absolute;
			right: -29px;
			bottom: -1px;
			transform: rotate(-90deg);
			transition:
				color 0.5s,
				background-color 0.5s,
				border-color 0.5s;
		}
	}
</style>

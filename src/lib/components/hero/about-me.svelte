<script lang="ts">
	import { scrollToAnchor } from '$lib/actions/scroll-to-anchor';
	import { t } from '$lib/stores';
	import { capitalize } from 'mytril/actions';
	import { Btn, Card, CardActions, CardText, Icon } from 'mytril/components';
</script>

<Card rounded="4xl">
	<CardText class="!text-lg">
		<p class="!mb-1 !text-3xl font-bold">{capitalize($t('hero.heading.introduction'))}</p>
		<p class="!mb-2">
			Je suis un développeur Web basé en France ! En tant que développeur FrontEnd, je me concentre
			sur la construction d'applications Web de hautes qualités et performantes à travers un code
			propre et maintenable.
		</p>
		<p class="!mb-2">
			J'ai fondé en 2022 avec une équipe de passionnés du Web <strong>
				<a href="https://minedelve.com">Minedelve, une mine d'outils robustes</a>
			</strong>, Minedelve est dédié à l'apprentissage, la construction et le partage de projets
			techniques ambitieux. Minedelve propose des solutions facilitant la mise en place de projets
			flexibles, capables d’aider à mieux travailler, plus vite, et sans compromettre la qualité.
		</p>
		<p>
			Notre premier projet se nomme <strong>
				<a href="https://minedelve.com/mytril/docs"> Mytril, une librairie de composants Svelte</a>,
			</strong> simple, légère et personnalisable. Cette solution Open Source a été pensée par un front
			pour des fronts afin de leur faciliter le développement de fonctionnalités sans restriction ni
			frustration. Mytril permet d'obtenir des interfaces complexes structurées et performantes.
		</p>
	</CardText>
	<CardActions>
		<Btn
			rounded="pill"
			size="lg"
			onclick={() => scrollToAnchor('contact')}
			background="primary"
			color="on-primary"
		>
			{#snippet prepend()}
				<Icon icon="font:mgc_ghost_line" color="on-primary" />
			{/snippet}
			{capitalize($t('hero.contact.contact-me'))}
			{#snippet append()}
				<Icon icon="font:mgc_send_plane_line" color="on-primary" />
			{/snippet}
		</Btn>
	</CardActions>
</Card>

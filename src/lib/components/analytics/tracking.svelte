<script lang="ts">
	import { PUBLIC_ANALYTICS_ACTIVATE, PUBLIC_GTM_ACTIVATE } from '$env/static/public';

	import Ga from './modules/ga.svelte';
	import Gtm from './modules/gtm.svelte';
</script>

{#if PUBLIC_ANALYTICS_ACTIVATE === 'true'}
	<Ga />
{/if}

{#if PUBLIC_GTM_ACTIVATE === 'true'}
	<Gtm />
{/if}

<script lang="ts">
	import { setRouteParams } from '$lib/helpers';
	import { Btn, Spacer, Toolbar } from 'mytril';
</script>

<Toolbar
	id="secondary-navigation"
	class="fixed rounded-lg none sm:flex"
	contentClass="mx-3 ga-2"
	style="bottom: 30px;z-index: 10000;"
>
	<Btn onclick={() => setRouteParams('modal', 'dev')}>Languages</Btn>
	<Btn onclick={() => setRouteParams('modal', 'tools')}>Environements</Btn>
	<Spacer />
	<Btn size="xl" class="px-2">Visit my CV</Btn>
</Toolbar>

<script lang="ts">
	import { Btn, Spacer, Toolbar } from 'mytril';
</script>

<Toolbar
	id="secondary-navigation"
	class="fixed rounded-lg"
	contentClass="mx-3 ga-2"
	style="bottom: 30px;z-index: 10000;"
>
	<Btn color="on-surface" href="?modal=dev" link={false}>Languages</Btn>
	<Btn color="on-surface" href="?modal=tools" link={false}>Environements</Btn>
	<Spacer />
	<Btn size="xl" class="px-2">Visit my CV</Btn>
</Toolbar>

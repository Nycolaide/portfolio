<script lang="ts">
	let { children } = $props();
</script>

<h2 class="!mt-8 !mb-8 text-center text-lg uppercase opacity-80">
	{@render children()}
</h2>

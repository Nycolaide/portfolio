<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-blog">
	<div></div>
</div>

{@render children()}

<style lang="scss">
	.bg-blog {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;

		& > div {
			background-image: linear-gradient(90deg, var(--myt-color-outline-variant) 1px, transparent 0),
				linear-gradient(180deg, var(--myt-color-outline-variant) 1px, transparent 0);
			background-size: 40px 40px;
			background-repeat: repeat;
			mask-image: radial-gradient(
				ellipse 60% 50% at 50% 0,
				var(--myt-color-background) 70%,
				transparent 100%
			);
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
</style>

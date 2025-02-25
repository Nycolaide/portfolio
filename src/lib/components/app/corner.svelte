<script lang="ts">
	let { right, ...rest }: { right?: boolean; [key: string]: unknown } = $props();
</script>

<div {...rest}>
	<svg
		class:corner-right={right}
		width="100%"
		height="100%"
		viewBox="0 0 30 29"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xml:space="preserve"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
	>
		<g id="corner-svg" transform="matrix(0.015625,0,0,0.0277778,0,0)">
			<rect x="0" y="0" width="1920" height="1080" style="fill:none;" />
			<clipPath id="_clip1">
				<rect x="0" y="0" width="1920" height="1080" />
			</clipPath>
			<g clip-path="url(#_clip1)">
				<g transform="matrix(135.704,0,0,76.3334,-807.655,-378.768)" fill="currentColor">
					<path
						d="M6.423,19.11L5.952,19.11L5.952,4.962L20.1,4.962L20.1,5.434C12.552,5.434 6.423,11.562 6.423,19.11ZM20.1,5.434C27.649,5.434 33.777,11.562 33.777,19.11C33.777,26.659 27.649,32.787 20.1,32.787C12.552,32.787 6.423,26.659 6.423,19.11L20.1,19.11L20.1,5.434Z"
					/>
				</g>
			</g>
		</g>
	</svg>
</div>

<style lang="postcss">
	svg {
		color: orange;
		width: 1.875rem;
		height: 1.875rem;

		&.corner-right {
			transform: scale(-1, 1);
		}
	}
</style>

<script lang="ts">
	export let href: string;
	export let refer = false;
</script>

<a {href} target={refer ? '_blank' : undefined} rel={refer ? 'noopener noreferrer' : undefined}>
	<slot />
</a>

<style lang="scss">
	a {
		display: inline-block;
		text-align: center;
		height: 35px;
		width: 80px;
		padding-top: 15px;

		&:hover {
			color: $light-1;
			background-color: $dark-2;
		}
	}
</style>

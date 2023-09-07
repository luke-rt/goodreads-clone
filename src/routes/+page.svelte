<script>
    import Profile from "$lib/components/Profile.svelte";
	
	export let data;
	const { session, profiles } = data
</script>

<svelte:head>
	<title>GoodReads Clone</title>
</svelte:head>

<div class="home">
	<h2>Users:</h2>
	{#each profiles as profile}
		<Profile {profile} />
	{/each}
</div>

<style lang="scss">
	.home {
		width: 600px;
		margin-inline: auto;
	}
</style>

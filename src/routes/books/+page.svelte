<script>
    import Book from "$lib/components/Book.svelte";

	export let data;
</script>

<svelte:head>
	<title>Books | GoodReads Clone</title>
</svelte:head>

<div class="books">
	{#each data.books as book}
		<Book {book} />
	{/each}
</div>

<style lang="scss">
	.books {
		width: 600px;
		margin-inline: auto;
	}
</style>

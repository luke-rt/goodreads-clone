<script lang="ts">
    import Book from "$lib/components/Book.svelte";
    export let data;
    const { session, profile, params, books } = data;
</script>

<section class="profile">
    <h1>{profile.full_name}</h1>
    {#if session?.user.id == params.slug}
        <a href="/profile/edit">Edit Profile</a>
    {/if}
    <h2>Stats</h2>
    <p>Books read: {books.length}</p>
</section>

<svelte:head>
	<title>{profile.full_name}'s Profile | GoodReads Clone</title>
</svelte:head>

<section class="books">
	{#each books as book}
		<Book book={book} />
	{/each}
</section>

<style lang="scss">
    .profile {
        width: 600px;
        margin-inline: auto;
        h2 {
            margin-top: 20px;
        }
        a {
            text-decoration: underline;
            &:hover {
                color: darkgray;
            }
        }
    }
    .books {
        width: 600px;
		margin-inline: auto;
    }
</style>

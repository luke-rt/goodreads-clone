<script lang="ts">
    export let data;
    const { session, book, rel } = data;

    let read = rel;
</script>

<h1>{book.title}</h1>
<h2>{book.authors.join(", ")}</h2>
<p>{book.desc}</p>

{#if session}
    <form
        method="post"
        action={read ? "?/delete" : "?/add"}
    >
        <button
            id = "read-btn"
            class:read = {read}
        >
            {read ? "Read ✓" : "Not Read (yet)"}
        </button>
    </form>
{/if}

<style lang="scss">
    h2 {
        margin-block: 20px;
    }
    button {
		display: inline-block;
		text-align: center;
		height: 35px;
		width: 100px;
        border: none;
        border-radius: 30px;
        margin-block: 20px;

        background-color: $green-1;
        &.read {
            background-color: $green-2;
        }
        &:hover {
            box-shadow: 6px 6px 10px lightgray;
            cursor: pointer;
        }
	}
</style>

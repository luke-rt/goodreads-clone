<script lang="ts">
	import type { Book } from "$lib/types";

    export let book: Book;

    const desc = book.desc.substring(0, 200) + "...";
</script>

<div class="book-preview">
    <a class="title" href={`/books/${book.id}`}>{book.title}</a>
    <p class="authors">{book.authors.join(", ")}</p>
    <p class="desc">{desc}</p>
    <a class="continue" href={`/books/${book.id}`}> Continue Reading</a>
    <div>
        
    </div>
</div>

<style lang="scss">
    .book-preview {
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 3px;
        width: 600px;
        padding: 10px;
        margin-block: 20px;
        a {
            &:hover {
                text-decoration: underline;
            }
        }
        a.title {
            display: block;
            font-weight: bolder;
            font-size: 1.2em;
        }
        a.continue {
            color: gray;
        }
        p.authors {
            margin-block: 5px;
            font-size: 1em;
            font-weight: bold;
        }
        p.desc {
            display: inline;
        }
    }
</style>

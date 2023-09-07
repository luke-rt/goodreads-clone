<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';

	export let data;

	let { supabase, session, profile } = data;
	$: ({ supabase, session, profile } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<header>
	<nav>
		<a href="/">GoodReads Clone</a>
		<Button href="/">Home</Button>
		<Button href="/books">Books</Button>
	</nav>
	<div class="profile">
		<Button href="/profile">{profile ? profile?.full_name : "Sign In"}</Button>
	</div>
</header>

<main>
	<slot />
</main>

<style lang="scss">
	header {
		position: fixed;
		background-color: $light-2;
		width: 100%;
		top: 0;
		left: 0;
		
		nav {
			margin-left: 10vw;
			float: left;
			a {
				font-weight: bolder;
				padding: 15px;

				&:hover {
					color: gray;
				}
			}
		}
		.profile {
			margin-right: 10vw;
			float: right;
		}
	}
	
	main {
		margin-inline: 12vw;
		margin-block: 5vw;
	}
</style>

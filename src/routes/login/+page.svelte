<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;
</script>

<svelte:head>
	<title>Login | GoodReads Clone</title>
</svelte:head>

<div>
	<Auth
		supabaseClient={data.supabase}
		view="magic_link"
		redirectTo={`${data.url}/auth/callback`}
		showLinks={false}
		appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
	/>
</div>

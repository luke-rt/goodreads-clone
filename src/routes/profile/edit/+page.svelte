<script lang="ts">
	import { enhance } from '$app/forms'
    import type { SubmitFunction } from '@sveltejs/kit';

	export let data;
	export let form;

	let { session, profile } = data
	$: ({ session, profile } = data)

	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<svelte:head>
	<title>Edit Profile | GoodReads Clone</title>
</svelte:head>

<div class="edit">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<input
				type="submit"
				class="button block primary save"
				value={loading ? 'Loading...' : 'Save'}
				disabled={loading}
			/>
		</div>
	</form>

	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button block signout" disabled={loading}>Sign Out</button>
		</div>
	</form>
</div>

<style lang="scss">
	.edit {
		width: 400px;
		margin-inline: auto;
		form {
			div {
				margin-block: 5vh;
				input {
					border: 1px solid gray;
        			border-radius: 5px;
					padding: 10px;
					display: block;

				}
			}
		}
		.save, .signout {
			display: inline-block;
			text-align: center;
			height: 35px;
			width: 100px;
			border: none;
			border-radius: 30px;

			background-color: $dark-2;
			color: white;
			&:hover {
				box-shadow: 6px 6px 10px lightgray;
				cursor: pointer;

				background-color: $light-2;
				color: black;
			}
		}
	}
</style>
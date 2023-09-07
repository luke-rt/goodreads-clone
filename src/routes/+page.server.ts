export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    const { data: profiles } = await supabase
		.from('profiles')
		.select()

	return { session, profiles }
}

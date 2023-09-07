export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

	const { data: books } = await supabase
		.from('books')
		.select()

	return { session, books }
}

export const load = async ({ params, locals: { supabase, getSession } }) => {
    const session = await getSession();

	const { data: profile } = await supabase
		.from('profiles')
		.select()
		.eq('id', params.slug)
        .single()
	
	const { data: res } = await supabase
		.from('profiles')
		.select('id')
		.eq('id', params.slug)
		.select('books(id, title, desc, authors)');

	const books = res[0].books;

	return { session, profile, books, params }
}

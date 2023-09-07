import { fail } from "@sveltejs/kit";

export const load = async ({ params, locals: { supabase, getSession } }) => {
    const session = await getSession();

	const { data: book } = await supabase
		.from('books')
		.select()
		.eq('id', params.slug)
        .single();
	
	const { data } = await supabase
		.from('rel_profiles_books')
		.select()
		.eq('profile_id', session?.user.id)
		.eq('book_id', params.slug)
		.single();
	
	let rel = false;
	if(data) rel = true;

	return { session, book, rel }
}

export const actions = {
	add: async ({ params, locals: { supabase, getSession } }) => {
		// add connection
		const session = await getSession();
		
		const { error } = await supabase.from('rel_profiles_books').upsert({
			profile_id: session?.user.id,
			book_id: params.slug,
		})

		if (error) {
			return fail(500);
		}
	},
	delete: async ({ params, locals: { supabase, getSession } }) => {
		const session = await getSession();
		
		const { error } = await supabase
			.from('rel_profiles_books')
			.delete()
			.eq('profile_id', session?.user.id)
			.eq('book_id', params.slug);

		if (error) {
			return fail(500);
		}
	},
}

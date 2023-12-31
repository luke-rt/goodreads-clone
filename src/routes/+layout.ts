import { PUBLIC_SUPABASE_URL, PUBLIC_ANON_KEY } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const { data: { session } } = await supabase.auth.getSession();

	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name`)
		.eq('id', session?.user.id)
		.single()

	return { supabase, session, profile };
};

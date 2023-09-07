import { redirect } from "@sveltejs/kit"

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession()

	if (!session) {
		throw redirect(303, '/login');
	}
    else {
        throw redirect(302, `/profile/${session.user.id}`);
    }
}

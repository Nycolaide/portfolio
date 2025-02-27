import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const session = cookies.get('user-call-api');

	if (!session) {
		cookies.set('user-call-api', 'yes', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 60 * 60 * 6
		});
	}

	return { session };
};

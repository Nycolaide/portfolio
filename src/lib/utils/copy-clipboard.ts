export async function copyToClipboard(email: string | null) {
	if (email) {
		try {
			await navigator.clipboard.writeText(email);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	} else {
		return false;
	}
}

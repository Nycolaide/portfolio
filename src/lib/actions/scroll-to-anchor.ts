export const scrollToAnchor = (anchorId: string) => {
	const target = document.getElementById(anchorId);
	if (target) {
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
};

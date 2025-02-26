export const numberDecorate = (n: number): string => {
	if (n >= 1000000) {
		return (n / 1000000).toFixed(1) + 'M';
	} else if (n >= 1000) {
		return (n / 1000).toFixed(1) + 'k';
	} else if (n) {
		return n.toString();
	} else {
		return String(n);
	}
};

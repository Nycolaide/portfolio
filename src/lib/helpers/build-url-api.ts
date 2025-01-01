/**
 * Constructs a URL with query parameters.
 *
 * @param baseUrl - The base URL to which the query parameters will be appended.
 * @param params - An object representing the query parameters. The keys are the parameter names,
 * and the values can be either strings or arrays of strings.
 *
 * @returns The constructed URL with the query parameters appended.
 */
export const buildUrlApi = (baseUrl: string, params: Record<string, string | string[]>): string => {
	const url = new URL(baseUrl, window.location.origin);
	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach((val) => url.searchParams.append(key, val));
		} else {
			url.searchParams.append(key, value);
		}
	});
	return url.toString();
};

/** @type {import('mytril').Config} */
export default {
	colorScheme: 'system',
	colors: {
		default: {
			primary: { light: 'var(--color-blue-700)', dark: 'var(--color-blue-600)' },
			'on-primary': 'var(--color-neutral-50)',
			background: { light: 'var(--color-stone-200)', dark: 'var(--color-gray-950)' },
			social: {
				daily: '#a8a9ab',
				x: { light: 'oklch(0.17 0 0)', dark: 'oklch(0.93 0 0)' },
				github: { light: 'oklch(0.25 0.01 254.09)', dark: 'oklch(0.98 0 0)' },
				linkedin: 'oklch(0.52 0.16 254.73)',
				instagram: 'oklch(0.64 0.24 14.81)',
				reddit: '#ff4500'
			}
		}
	}
};

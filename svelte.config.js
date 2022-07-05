import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE'],
		},
		alias: {
			$generated: 'src/generated',
			$components: 'src/components',
		},
		vite: {
			// define: { global: 'globalThis' },
			// optimizeDeps: { include: ['ethers'] },
		},
		prerender: {
			default: true,
		},
	},
}

export default config

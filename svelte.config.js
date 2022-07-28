import adapterStatic from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const isProd = process.env.NODE_ENV === 'production'

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
    adapter: adapterStatic(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
    alias: {
      $generated: 'src/generated',
      $components: 'src/components',
    },
    prerender: {
      default: true,
      entries: ['*', '/blog/guide.json', '/blog/developer.json', '/blog/guide', '/blog/developer'],
    },
    trailingSlash: 'always',
    paths: {
      base: isProd ? '/SvelteApp' : '',
    },
  },
}

export default config

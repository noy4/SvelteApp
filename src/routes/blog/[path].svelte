<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, params }) => {
    const url = `/blog/${params.path}.json`
    const res = await fetch(url)
    if (!res.ok) {
      return {}
    }
    const post = await res.json()
    return {
      props: { post },
    }
  }
</script>

<script lang="ts">
  import { marked } from 'marked'
  export let post: { meta: Record<string, unknown>; body: string }
  const html = marked.parse(post.body)
</script>

<section class="px-4">
  <div class="card bg-base-100 max-w-2xl w-full mx-auto mt-8 p-8 rounded">
    <h1>{post.meta.title}</h1>
    {@html html}
  </div>
  <div class="h-32" />
</section>

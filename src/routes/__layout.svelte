<script lang="ts">
  import { BottomNav, Header } from '$components'
  import '$lib/internal/__global'
</script>

<Header />

<main>
  <slot />
</main>

<BottomNav />

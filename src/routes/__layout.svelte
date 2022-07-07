<script lang="ts">
  import { BottomNav, Header } from '$components'
  import { Buffer } from 'buffer'
  import '$lib/styles/app.css'
  import '$lib/utils/dayjs'

  window.Buffer = Buffer
</script>

<Header />

<main>
  <slot />
</main>

<BottomNav />

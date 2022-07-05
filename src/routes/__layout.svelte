<script lang="ts">
	import { BottomNav, Header } from '$components'
	import { Buffer } from 'buffer'
	import '$lib/styles/app.css'

	window.Buffer = Buffer
</script>

<Header />

<main>
	<slot />
</main>

<BottomNav />

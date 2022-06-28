<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import { Buffer } from 'buffer'
	import '../app.css'

	window.Buffer = Buffer
</script>

<Header />

<main>
	<slot />
</main>

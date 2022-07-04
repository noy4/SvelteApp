<script lang="ts">
	const rate = 310_421
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center mx-4">
	<h3 class="mt-2">You have</h3>
	<div>
		<span class="text-5xl font-semibold">{(5000).toLocaleString()}</span>
		<span class="font-bold">KWC</span>
	</div>

	<div class="card w-full max-w-sm bg-base-100 shadow-xl not-prose mt-8">
		<div class="card-body items-center">
			<h2 class="card-title">Buy 5,000 KWC</h2>
			<div class="flex w-full justify-between">
				<p>Rate</p>
				<p class="flex-grow-0">{rate.toLocaleString()} KWC/ETH</p>
			</div>
			<div class="flex w-full justify-between">
				<p>Price</p>
				<p class="flex-grow-0">{5000 / rate} ETH</p>
			</div>
			<div class="card-actions mt-4">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>

	<div class="card w-full max-w-sm bg-base-100 shadow-xl not-prose mt-8">
		<div class="card-body items-center">
			<h2 class="card-title">Sell 5,000 KWC</h2>
			<div class="flex w-full justify-between">
				<p>Rate</p>
				<p class="flex-grow-0">{rate.toLocaleString()} KWC/ETH</p>
			</div>
			<div class="flex w-full justify-between">
				<p>Price</p>
				<p class="flex-grow-0">{5000 / rate} ETH</p>
			</div>
			<div class="card-actions mt-4">
				<button class="btn btn-primary">Sell Now</button>
			</div>
		</div>
	</div>

	<div class="h-16" />
</section>

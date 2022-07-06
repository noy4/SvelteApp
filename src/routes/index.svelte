<script lang="ts">
	import { DEV_ADDRESS, kuwaCoin, vendor } from '$lib/internal/contracts'
	import { formatEther, parseEther } from 'ethers/lib/utils'
	import { signerAddress } from 'svelte-ethers-store'

	let isBuying = false

	$: balance = $kuwaCoin?.balanceOf($signerAddress)
	$: rate = $vendor?.TOKEN_RATE()

	$: price = (async () => {
		if (!rate) return
		const _rate = await rate
		const price = parseEther('5000').div(_rate)
		return price
	})()

	async function buyKuwaCoin() {
		if (!$vendor) return
		isBuying = true
		try {
			const tx = await $vendor.buyTokens({ value: await price })
			const receipt = await tx.wait()
			console.log('receipt:', receipt)
		} catch (error) {
			console.log('error:', error)
		} finally {
			isBuying = false
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center mx-4">
	<h3 class="mt-2">You have</h3>
	<div>
		<span class="text-5xl font-semibold">
			{#await balance then value}
				{formatEther(value ?? 0).toLocaleString()}
			{/await}
		</span>
		<span class="font-bold">KWC</span>
	</div>

	<div class="card w-full max-w-sm bg-base-100 shadow-xl not-prose mt-8">
		<div class="card-body items-center">
			<h2 class="card-title">Buy 5,000 KWC</h2>
			<div class="flex w-full justify-between">
				<p>Rate</p>
				<p class="flex-grow-0">
					{#await rate then value}
						{value ? value.toNumber().toLocaleString() : '-'}
					{/await} KWC/ETH
				</p>
			</div>
			<div class="flex w-full justify-between">
				<p>Price</p>
				<p class="flex-grow-0">
					{#await price then value}
						{value ? formatEther(value) : '-'}
					{/await} ETH
				</p>
			</div>
			<div class="card-actions mt-4">
				<button class="btn btn-primary" class:loading={isBuying} on:click={buyKuwaCoin}
					>Buy Now</button>
			</div>
		</div>
	</div>

	<div class="card w-full max-w-sm bg-base-100 shadow-xl not-prose mt-8">
		<div class="card-body items-center">
			<h2 class="card-title">Sell 5,000 KWC</h2>
			<div class="flex w-full justify-between">
				<p>Rate</p>
				<p class="flex-grow-0">
					{#await rate then value}
						{value ? value.toNumber().toLocaleString() : '-'}
					{/await} KWC/ETH
				</p>
			</div>
			<div class="flex w-full justify-between">
				<p>Price</p>
				<p class="flex-grow-0">
					{#await price then value}
						{value ? formatEther(value) : '-'}
					{/await} ETH
				</p>
			</div>
			<div class="card-actions mt-4">
				<button class="btn btn-primary">Sell Now</button>
			</div>
		</div>
	</div>

	<div class="h-16" />
</section>

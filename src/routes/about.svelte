<script lang="ts">
	import { KuwaCoin__factory } from '$generated/typechain-types'
	import { kuwaCoin, VENDOR_ADDRESS } from '$lib/internal/contracts'
	import { shortenAddress } from '$lib/utils'
	import { formatEther } from 'ethers/lib/utils'
	import { chainId, connected, provider, signer, signerAddress } from 'svelte-ethers-store'

	$: signerOrProvider = $signer || $provider
	const kuwaCoinAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'

	$: balance = $kuwaCoin?.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
	$: allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="card bg-base-100 p-8 m-8 shadow-xl">
		<div class="flex justify-between">
			<div>connected</div>
			<div>{$connected}</div>
		</div>

		<div class="flex justify-between">
			<div>chainId</div>
			<div>{$chainId}</div>
		</div>

		<div class="flex justify-between">
			<div>signerAddress</div>
			<div>{shortenAddress($signerAddress)}</div>
		</div>

		<br />

		<div class="flex justify-between">
			<div>balance</div>
			<div>
				{#await balance}
					loading...
				{:then value}
					{value && formatEther(value)}
				{/await}
			</div>
		</div>

		<div class="flex justify-between">
			<div>totalSupply</div>
			<div>
				{#await $kuwaCoin?.totalSupply()}
					loading...
				{:then value}
					{value && formatEther(value)}
				{/await}
			</div>
		</div>

		<div class="flex justify-between">
			<div>allowance</div>
			<div>
				{#await allowance}
					loading...
				{:then value}
					{value && formatEther(value)}
				{/await}
			</div>
		</div>

		<br />

		<div class="flex justify-between">
			<div>Vendor ETH</div>
			<div>
				{#await $provider?.getBalance(VENDOR_ADDRESS)}
					loading...
				{:then value}
					{value && formatEther(value)}
				{/await}
			</div>
		</div>
	</div>
</section>

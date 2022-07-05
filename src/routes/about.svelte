<script lang="ts">
	import { KuwaCoin__factory } from '$generated/typechain-types'
	import { shortenAddress } from '$lib/utils'
	import { formatEther } from 'ethers/lib/utils'
	import { chainId, connected, provider, signer, signerAddress } from 'svelte-ethers-store'

	$: signerOrProvider = $signer || $provider
	const kuwaCoinAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'

	$: kuwaCoin = signerOrProvider
		? KuwaCoin__factory.connect(kuwaCoinAddress, signerOrProvider)
		: undefined
	$: balance = kuwaCoin?.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center">
	<div>connected: {$connected}</div>
	<div>chainId: {$chainId}</div>
	<div>signerAddress: {shortenAddress($signerAddress)}</div>

	<div>
		balance:
		{#await balance}
			loading...
		{:then value}
			{value && formatEther(value)}
		{/await}
	</div>

	<div>
		totalSupply:
		{#await kuwaCoin?.totalSupply()}
			loading...
		{:then value}
			{value && formatEther(value)}
		{/await}
	</div>
</section>

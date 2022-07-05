<script lang="ts">
	import { KuwaCoin__factory } from '$generated/typechain-types'
	import { web3Modal } from '$lib/web3Modal'
	import { ethers } from 'ethers'
	import { formatEther } from 'ethers/lib/utils'
	import { onMount } from 'svelte'
	import {
		chainId,
		connected,
		contracts,
		defaultEvmStores,
		provider,
		signer,
		signerAddress,
	} from 'svelte-ethers-store'

	let account = ''

	async function openModal() {
		if (account) return
		const _provider = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(_provider)
		defaultEvmStores.setProvider(provider)
		const accounts = await provider.listAccounts()
		account = accounts[0]
	}

	function disconnect() {
		web3Modal.clearCachedProvider()
		defaultEvmStores.disconnect()
		account = ''
	}

	async function connectOnMount() {
		if (!web3Modal.cachedProvider) return
		const _provider = await web3Modal.connectTo(web3Modal.cachedProvider)
		const provider = new ethers.providers.Web3Provider(_provider)
		defaultEvmStores.setProvider(provider)
		const accounts = await provider.listAccounts()
		account = accounts[0]
	}

	$: signerOrProvider = $signer || $provider
	const kuwaCoinAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'

	$: kuwaCoin = signerOrProvider
		? KuwaCoin__factory.connect(kuwaCoinAddress, signerOrProvider)
		: undefined
	$: balance = kuwaCoin?.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')

	onMount(() => {
		connectOnMount()
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center">
	{#if account}
		<button class="btn btn-secondary" on:click={disconnect}>Disconnect</button>
	{:else}
		<button class="btn btn-primary" on:click={openModal}>Connect</button>
	{/if}
	<div>{account}</div>

	<div>connected: {$connected}</div>
	<div>provider: {$provider}</div>
	<div>chainId: {$chainId}</div>
	<div>signer: {$signer}</div>
	<div>signerAddress: {$signerAddress}</div>
	<div>contracts: {$contracts}</div>

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

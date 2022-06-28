<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte'
	import Web3Modal from 'web3modal'
	import WalletConnectProvider from '@walletconnect/ethereum-provider'
	import { StaticJsonRpcProvider } from '@ethersproject/providers'
	import { ethers } from 'ethers'

	let account = ''

	const web3Modal = new Web3Modal({
		providerOptions: {
			walletconnect: {
				package: WalletConnectProvider,
				options: {
					infuraId: import.meta.env.VITE_INFURA_ID,
				},
			},
			'custom-localhost': {
				display: {
					logo: 'https://avatars.githubusercontent.com/u/56928858?s=200&v=4',
					name: 'BurnerWallet',
					description: '🔥 Connect to localhost with a burner wallet 🔥',
				},
				package: StaticJsonRpcProvider,
				connector: async (_package, options) => {
					const url = options.rpc[options.chainId]
					const _provider = new StaticJsonRpcProvider(url, options.chainId)
					const network = await _provider.getNetwork()
					console.log('options:', options)
					console.log('network:', network)
					if (!_provider.anyNetwork) {
						console.warn(`Could not connect to local chain: ${options.chainId} url:${url}`)
					}
					return _provider
				},
				options: {
					chainId: 31337,
					rpc: {
						[31337]: 'http://localhost:8545',
					},
				},
			},
		},
	})

	async function openModal() {
		if (account) return
		const instance = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(instance)
		const accounts = await provider.listAccounts()
		account = accounts[0]
	}

	function disconnect() {
		account = ''
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center">
	<Counter />
	{#if account}
		<button class="btn btn-secondary" on:click={disconnect}>Disconnect</button>
	{:else}
		<button class="btn btn-primary" on:click={openModal}>Connect</button>
	{/if}
	<div>{account}</div>
</section>

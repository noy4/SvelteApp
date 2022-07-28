<script lang="ts">
  import { theme } from '$lib/styles/theme'
  import { shortenAddress, withBase } from '$lib/utils'
  import { ethers, Wallet } from 'ethers'
  import { formatEther } from 'ethers/lib/utils'
  import { onMount } from 'svelte'
  import { defaultEvmStores, signer, signerAddress } from 'svelte-ethers-store'
  // @ts-ignore
  import { Jazzicon } from 'svelte-ethers-store/components'
  import { writable } from 'svelte/store'

  let className = ''
  export { className as class }

  let isOpen = true
  let modalId = ''
  let privateKey = ''
  let importErrorMessage = ''

  const wallet = writable<Wallet | undefined>()

  async function openModal(id: string) {
    modalId = id
    isOpen = true
  }
  async function closeModal() {
    isOpen = false
  }

  async function createWallet() {
    const _wallet = ethers.Wallet.createRandom()
    localStorage.privateKey = _wallet.privateKey
    const provider = new ethers.providers.JsonRpcProvider()
    const signer = new ethers.Wallet(_wallet.privateKey, provider)
    wallet.set(signer)
    defaultEvmStores.setProvider(signer.provider, signer.address)
  }

  function disconnect() {
    defaultEvmStores.disconnect()
    wallet.set(undefined)
    localStorage.removeItem('privateKey')
    isOpen = false
  }

  function importWallet() {
    importErrorMessage = ''
    const provider = new ethers.providers.JsonRpcProvider()
    try {
      const signer = new ethers.Wallet(privateKey, provider)
      wallet.set(signer)
      localStorage.privateKey = signer.privateKey
      defaultEvmStores.setProvider(signer.provider, signer.address)
    } catch (e) {
      importErrorMessage = 'Invalid private key'
    }
  }

  async function connectOnMount() {
    if (!localStorage.privateKey) return
    const provider = new ethers.providers.JsonRpcProvider()
    const signer = new ethers.Wallet(localStorage.privateKey, provider)
    wallet.set(signer)
    defaultEvmStores.setProvider(signer.provider, signer.address)
  }

  $: balance = $signer && $signer.getBalance()

  onMount(() => {
    connectOnMount()
  })
</script>

<!-- Wallet modal -->
<input
  type="checkbox"
  id="walletModal"
  class="modal-toggle"
  checked={isOpen && modalId === 'walletModal'} />
<label for="walletModal" class="modal not-prose" on:click|self={closeModal}>
  <div class="modal-box max-w-md">
    <h2 class="font-bold text-xl pb-2">Your wallet</h2>
    {#if $wallet}
      <h3 class="font-bold mt-2">Address</h3>
      <div class="overflow-x-scroll">
        <div>{$signerAddress}</div>
      </div>
      <h3 class="font-bold mt-2">Private key</h3>
      <div class="overflow-x-scroll">
        <div>{$wallet?.privateKey}</div>
      </div>
      <label for="walletModal" class="btn btn-primary mt-4 normal-case w-32" on:click={disconnect}
        >Logout</label>
    {/if}
  </div>
</label>

<!-- Import modal -->
<input
  type="checkbox"
  id="importModal"
  class="modal-toggle"
  checked={isOpen && modalId === 'importModal'} />
<label for="importModal" class="modal not-prose" on:click|self={closeModal}>
  <div class="modal-box max-w-md">
    <div class="form-control w-full max-w-xs mt-2">
      <label for="privateKey" class="label">
        <span class="">Private key</span>
      </label>
      <input
        id="privateKey"
        type="text"
        placeholder="Type here"
        bind:value={privateKey}
        class="input input-bordered w-full max-w-xs" />
    </div>
    <label for="importModal" class="btn btn-primary mt-4 normal-case" on:click={importWallet}
      >Import wallet</label>
    <p class="text-error mt-2">{importErrorMessage}</p>
  </div>
</label>

<header class={`navbar shadow bg-base-100 gap-2 not-prose ${className}`}>
  <div class="flex-1">
    <button class="btn btn-ghost text-xl normal-case not-prose">
      <a href={withBase('/')}>
        <div class="sm:hidden">桑</div>
        <div class="hidden sm:block">Kuwa Coin</div>
      </a>
    </button>
  </div>

  {#if $signerAddress}
    <div class="bg-base-200 p-0.5 rounded-xl">
      {#await balance then value}
        <div class="mx-2">{Number((+formatEther(value)).toFixed(4))} ETH</div>
      {/await}
      <button
        class="btn btn-ghost btn-sm normal-case bg-base-100 rounded-xl gap-2"
        on:click={() => openModal('walletModal')}>
        <div>{shortenAddress($signerAddress)}</div>
        <Jazzicon size="18" />
      </button>
    </div>
  {:else}
    <div class="dropdown dropdown-hover">
      <div tabindex="0" class="btn btn-outline btn-sm btn-primary normal-case">
        Create / Import Wallet
      </div>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><div on:click={createWallet}>Create new wallet</div></li>
        <li><div>Import wallet</div></li>
      </ul>
    </div>
  {/if}

  <div class="dropdown dropdown-end not-prose">
    <div tabindex="0" class="btn btn-ghost px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href={withBase('/data')}>Data</a></li>
      <li><a href={withBase('/debug')}>Debug</a></li>
      <li><a href={withBase('/buy-sell')}>Buy & Sell</a></li>
      <li><a href={withBase('/blog/developer')}>Developer</a></li>
      <li>
        <!-- 🌞 sun icon -->
        <div class:hidden={$theme === 'dark'} on:click={theme.setDark}>
          <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
        </div>
        <!-- 🌙 moon icon -->
        <div class:hidden={$theme !== 'dark'} on:click={theme.setLight}>
          <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </div>
      </li>
    </ul>
  </div>
</header>

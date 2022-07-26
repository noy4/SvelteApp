<script lang="ts">
  import { kuwaCoin, vendor, VENDOR_ADDRESS } from '$lib/internal/contracts'
  import dayjs from 'dayjs'
  import { parseEther } from 'ethers/lib/utils'
  import { signerAddress } from 'svelte-ethers-store'
  import type { TransferEvent } from '$generated/typechain-types/contracts/Vendor'
  import { shortenAddress } from '$lib/utils'
  // @ts-ignore
  import { Jazzicon } from 'svelte-ethers-store/components'
  import { Card } from '$components'
  import { ethers } from 'ethers'
  const formatEther = ethers.utils.formatEther // build すると formatEther ないと言われたので

  let isBuying = false
  let isSelling = false
  let isApproving = false
  let transfers: TransferEvent[] = []
  let isTransfersLoading = false

  $: balance = $kuwaCoin?.balanceOf($signerAddress)
  $: allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)
  $: rate = $vendor?.TOKEN_RATE()

  async function getTransfers() {
    if (!$vendor) return
    isTransfersLoading = true
    transfers = await $vendor.queryFilter($vendor.filters.Transfer())
    isTransfersLoading = false
  }

  $: if ($vendor) {
    $vendor.on('Transfer', (...args) => {
      console.log({
        transactionHash: args[4].transactionHash.slice(2, 4),
        side: args[1],
        tokenAmount: formatEther(args[3]),
      })
      balance = $kuwaCoin?.balanceOf($signerAddress)
      allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)
      getTransfers()
    })
  }

  $: if ($vendor) {
    getTransfers()
  }

  $: $kuwaCoin?.on('Approval', () => {
    allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)
    console.log('Approval')
  })

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
    } catch (error) {
      console.log('error:', error)
    } finally {
      isBuying = false
    }
  }

  async function sellKuwaCoin() {
    if (!$vendor) return
    isSelling = true
    try {
      const tx = await $vendor.sellTokens(parseEther('5000'))
      const receipt = await tx.wait()
    } catch (error) {
      console.log('error:', error)
    } finally {
      isSelling = false
    }
  }

  async function approve() {
    if (!$kuwaCoin || !balance) return
    isApproving = true
    try {
      const tx = await $kuwaCoin.approve(VENDOR_ADDRESS, balance)
      const receipt = await tx.wait()
    } catch (error) {
      console.log('error:', error)
    } finally {
      isApproving = false
    }
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center px-4">
  <h3 class="mt-2">You have</h3>
  <div>
    <span class="text-5xl font-semibold">
      {#await balance then value}
        {formatEther(value ?? 0).toLocaleString()}
      {/await}
    </span>
    <span class="font-bold">KWC</span>
  </div>

  <Card class="not-prose mt-8">
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
  </Card>

  <Card class="not-prose mt-8">
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
        {#await allowance then value}
          {#if value && value.lt(parseEther('5000'))}
            <button class="btn btn-primary" class:loading={isApproving} on:click={approve}
              >Approve</button>
          {:else}
            <button class="btn btn-primary" class:loading={isSelling} on:click={sellKuwaCoin}
              >Sell Now</button>
          {/if}
        {/await}
      </div>
    </div>
  </Card>

  <h2>Logs</h2>

  <div class="overflow-x-auto max-w-md w-full mx-auto not-prose mt-8 z-0">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th>Age</th>
          <th>Who</th>
          <th>Side</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {#if isTransfersLoading && transfers.length === 0}
          <tr>loading...</tr>
        {:else}
          {#each transfers.reverse() as item}
            <tr>
              <td>
                {#await item.getBlock()}
                  loading...
                {:then block}
                  {dayjs(block.timestamp * 1000).fromNow(true)}
                {/await}
              </td>
              <td
                ><div class="flex items-center gap-2">
                  <Jazzicon size="18" address={item.args.who} />
                  {shortenAddress(item.args.who)}
                  {#if item.args.who === $signerAddress}
                    <div class="badge badge-sm badge-ghost">You</div>
                  {/if}
                </div>
              </td>
              <td
                ><div class="flex items-center gap-2">
                  {#if item.args.side === 'buy'}
                    <div class="badge badge-primary badge-sm">Buy</div>
                  {:else}
                    <div class="badge badge-secondary badge-sm">Sell</div>
                  {/if}
                </div>
              </td>
              <td>{formatEther(item.args.tokenAmount)}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>

  <div class="h-16" />
</section>

<script lang="ts">
  import { Card } from '$components'

  import { kuwaCoin, KUWA_COIN_ADDRESS, VENDOR_ADDRESS } from '$lib/internal/contracts'
  import { shortenAddress } from '$lib/utils'
  import dayjs from 'dayjs'
  import { formatEther } from 'ethers/lib/utils'
  import { chainId, signerAddress } from 'svelte-ethers-store'
  // @ts-ignore
  import { Jazzicon } from 'svelte-ethers-store/components'

  $: balance = $kuwaCoin?.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  $: allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)

  $: filter = $kuwaCoin?.filters.Transfer(null, null)
  $: transfers = filter && $kuwaCoin?.queryFilter(filter)
</script>

<svelte:head>
  <title>Data</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center px-8">
  <h1 class="pt-8">Kuwa Coin</h1>

  <Card class="p-8">
    <div class="flex justify-between">
      <div>chainId</div>
      <div>{$chainId}</div>
    </div>

    <div class="flex justify-between">
      <div>Address</div>
      <div>{shortenAddress(KUWA_COIN_ADDRESS)}</div>
    </div>

    <div class="flex justify-between">
      <div>Total Supply</div>
      <div>
        {#await $kuwaCoin?.totalSupply()}
          loading...
        {:then value}
          {value ? (+formatEther(value)).toLocaleString() : '-'}
        {/await}
      </div>
    </div>
  </Card>

  <h2>Transfers</h2>

  <div class="overflow-x-auto max-w-xl w-full not-prose mt-8 z-0">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th>Age</th>
          <th>From</th>
          <th>to</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {#await transfers}
          <tr>loading...</tr>
        {:then items}
          {#each (items ?? []).reverse() as item}
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
                  <Jazzicon size="18" address={item.args.from} />
                  {shortenAddress(item.args.from)}
                  {#if item.args.from === $signerAddress}
                    <div class="badge badge-sm badge-ghost">You</div>
                  {/if}
                </div>
              </td>
              <td
                ><div class="flex items-center gap-2">
                  <Jazzicon size="18" address={item.args.to} />
                  {shortenAddress(item.args.to)}
                  {#if item.args.to === $signerAddress}
                    <div class="badge badge-sm badge-ghost">You</div>
                  {/if}
                </div>
              </td>
              <td>{formatEther(item.args.value)}</td>
            </tr>
          {/each}
        {/await}
      </tbody>
    </table>
  </div>

  <div class="h-16" />
</section>

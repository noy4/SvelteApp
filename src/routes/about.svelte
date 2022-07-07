<script lang="ts">
  import { kuwaCoin, VENDOR_ADDRESS } from '$lib/internal/contracts'
  import { shortenAddress } from '$lib/utils'
  import { formatEther } from 'ethers/lib/utils'
  import { chainId, connected, provider, signerAddress } from 'svelte-ethers-store'
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(relativeTime)
  // @ts-ignore
  import { Jazzicon } from 'svelte-ethers-store/components'

  $: balance = $kuwaCoin?.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  $: allowance = $kuwaCoin?.allowance($signerAddress, VENDOR_ADDRESS)

  $: filter = $kuwaCoin?.filters.Transfer(null, null)
  $: filterFrom = $kuwaCoin?.filters.Transfer($signerAddress, null)
  $: transfers = filter && $kuwaCoin?.queryFilter(filter)
  $: transfersFrom = filterFrom && $kuwaCoin?.queryFilter(filterFrom)
  $: console.log('filter:', filter)
  $: console.log('filterFrom:', filterFrom)
  $: {
    async function getTransfers() {
      const _transfers = await transfers
      const _transfersFrom = await transfersFrom
      console.log('transfers:', _transfers)
      console.log('_transfersFrom:', _transfersFrom)
    }
    getTransfers()
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-8">
  <div class="overflow-x-auto max-w-xl mx-auto not-prose mt-8">
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
          {#if items}
            {#each items.reverse() as item}
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
                  </div>
                </td>
                <td
                  ><div class="flex items-center gap-2">
                    <Jazzicon size="18" address={item.args.to} />
                    {shortenAddress(item.args.to)}
                  </div>
                </td>
                <td>{formatEther(item.args.value)}</td>
              </tr>
            {/each}
          {/if}
        {/await}
      </tbody>
    </table>
  </div>

  <div class="card bg-base-100 p-8 mt-8 shadow-xl max-w-sm mx-auto">
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

<script lang="ts">
  import { kuwaCoin, vendor, VENDOR_ADDRESS } from '$lib/internal/contracts'
  import dayjs from 'dayjs'
  import { formatEther, parseEther } from 'ethers/lib/utils'
  import { signerAddress } from 'svelte-ethers-store'
  import type { TransferEvent } from '$generated/typechain-types/contracts/Vendor'
  import { shortenAddress } from '$lib/utils'
  // @ts-ignore
  import { Jazzicon } from 'svelte-ethers-store/components'
  import { Card } from '$components'

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

<div class="hero min-h-screen not-prose" style="background-image: url(coin.jpeg);">
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Kuwa Coin</h1>
      <p class="mb-5">
        彼は言った世界は必ずしもみんな平等とは限らない 彼は言った世の中には絶対勝者と敗者が存在する
        彼は言ったその勝者の頂点が自分自身そうTop of the world
        彼が法であり秩序保たれるすぐさまなくなる世界のWar
      </p>
      <button class="btn btn-primary not-prose">
        <a href="/buy-sell">Buy Now</a>
      </button>
    </div>
  </div>
</div>

---
title: Kuwa Coin 開発
---

## 目的

ブロックチェーン開発の流れをアウトプットして理解

## やったこと

- scafold-eth 写経、構成理解
- yarn v3 試す
- yarn workspaces 試す

<br>

- hardhat
- vite (react-ts)
  - Chakra UI

<br>

- Web3Modal
- Kuwa Coin (Contract)
- Vendor (Contract)

React でフロント実装中に、思い立って Svelte でやってみることにした。

- Svelte
- Daisy UI

<br>

- TypeChain

## 変更

Kuwa Coin を売り買いできる Vendor コントラクトを実装したが、ユーザーに前もってテスト ETH 取得してもらうのアレだったので、Kuwa Coin をばら撒く Faucet コントラクトに変更

売り買いページ → [/buy-sell](/buy-sell)
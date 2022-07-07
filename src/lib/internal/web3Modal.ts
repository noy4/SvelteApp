import { StaticJsonRpcProvider } from '@ethersproject/providers'
import WalletConnectProvider from '@walletconnect/ethereum-provider'
import Web3Modal from 'web3modal'

export const getWeb3Modal = () =>
  new Web3Modal({
    cacheProvider: true,
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

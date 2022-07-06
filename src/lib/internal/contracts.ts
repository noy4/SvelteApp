import { KuwaCoin__factory } from '$generated/typechain-types'
import { Vendor__factory } from '$generated/typechain-types/factories/contracts/Vendor__factory'
import { provider, signer } from 'svelte-ethers-store'
import { derived } from 'svelte/store'

const signerOrProvider = derived([signer, provider], ([$signer, $provider]) => $signer || $provider)

const KUWA_COIN_ADDRESS = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'
export const kuwaCoin = derived(signerOrProvider, ($signerOrProvider) =>
	$signerOrProvider ? KuwaCoin__factory.connect(KUWA_COIN_ADDRESS, $signerOrProvider) : undefined
)

const VENDOR_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
export const vendor = derived(signerOrProvider, ($signerOrProvider) =>
	$signerOrProvider ? Vendor__factory.connect(VENDOR_ADDRESS, $signerOrProvider) : undefined
)

export const DEV_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

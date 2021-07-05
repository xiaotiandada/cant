
import { ethers } from 'ethers'

export const ZERO = '0x0000000000000000000000000000000000001000'

export const NetworksId = {
  BSC_MAINNET: 56,
  BSC_TESTNET:  97,
  MATIC_MAINNET: 137,
  MATIC_TESTNET: 80001,
}

export const CALL_ONLY_PROVIDER = {
  [NetworksId.BSC_MAINNET]: new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/', {
    name: 'BSC Mainnet',
    chainId: 56,
  }),
  [NetworksId.BSC_TESTNET]: new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/', {
    name: 'BSC Testnet',
    chainId: 97,
  }),
  [NetworksId.MATIC_MAINNET]: new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com/', {
    name: 'Matic Mainnet',
    chainId: 137,
  }),
  [NetworksId.MATIC_TESTNET]: new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/', {
    name: 'Matic Testnet',
    chainId: 80001,
  }),
}
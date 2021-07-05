import { ethers, utils } from 'ethers'
import { ZERO, CALL_ONLY_PROVIDER } from './constant'
import { ERC20 } from './abi/index'

/**
 * 余额小数处理
 * @param amount
 * @param decimal
 * @returns
 */
export const balanceDecimal = (amount: string, decimal: number): string => {
  // utils.formatUnits 是 0.0
  if (amount === '0.0') return '0';

  let point = amount.indexOf('.');
  if (~point) {
    return amount.slice(0, point + 1 + decimal);
  }
  return amount;
};

/**
 * 获取 Token 信息
 * @param {*} address token address
 * @param {*} chain
 * @returns { symbol, name, decimals }
 */
export async function ERC20Profile(address: string, chain: number) {

  if (!address) return
  if (address === ZERO) return

  try {
    const provider = CALL_ONLY_PROVIDER[chain]
    const ERC20Contract = new ethers.Contract(utils.getAddress(address), ERC20, provider)

    const symbol = await ERC20Contract.symbol()
    const name = await ERC20Contract.name()
    const decimals = await ERC20Contract.decimals()

    return {
      symbol,
      name,
      decimals: decimals || 18,
    }
  } catch (e) {
    console.log(e)
    return
  }
}
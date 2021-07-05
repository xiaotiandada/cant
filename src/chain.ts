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

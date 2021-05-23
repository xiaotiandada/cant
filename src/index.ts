import { isArray } from 'lodash';

/**
 * 数据格式化 [ [{}], [{}], [{}] ] ===> [ {} ]
 * @param arr 需要处理的数组
 */
export const convertArray = (arr: any[]) => {
  if (isArray(arr[0])) {
    return [].concat(...arr);
  }
  return arr;
};


// ------ REG --------
// match 不包含 AB 的字符
export const matchStr = (str: string, left: string, right: string) => {
  const pattern = new RegExp(`(?<=${left}).*?(?=${right})`);
  return str.match(pattern);
};
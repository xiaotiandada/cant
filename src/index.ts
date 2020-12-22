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
import { isArray } from 'lodash';

/**
 * 数据格式化 [ [{}], [{}], [{}] ] ===> [ {} ]
 * @param arr 需要处理的数组
 */

var convertArray = function convertArray(arr) {
  if (isArray(arr[0])) {
    return [].concat.apply([], arr);
  }

  return arr;
};

export { convertArray };
//# sourceMappingURL=index.esm.js.map

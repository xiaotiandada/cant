'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

/**
 * 数据格式化 [ [{}], [{}], [{}] ] ===> [ {} ]
 * @param arr 需要处理的数组
 */

var convertArray = function convertArray(arr) {
  if (lodash.isArray(arr[0])) {
    return [].concat.apply([], arr);
  }

  return arr;
};

exports.convertArray = convertArray;
//# sourceMappingURL=index.cjs.js.map

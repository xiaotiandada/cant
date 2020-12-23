var toolAnt = (function (exports, lodash) {
  'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, _));
//# sourceMappingURL=index.iife.js.map

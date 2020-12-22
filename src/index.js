"use strict";
exports.__esModule = true;
exports.convertToArray = void 0;
var lodash_1 = require("lodash");
/**
 * 数据格式化 [ [{}], [{}], [{}] ] ===> [ {} ]
 * @param arr 需要处理的数组
 */
exports.convertToArray = function (arr) {
    if (lodash_1.isArray(arr[0])) {
        return [].concat.apply([], arr);
    }
    return arr;
};

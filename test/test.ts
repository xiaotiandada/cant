import * as assert from 'assert';
import { convertToArray } from '../src/index';

describe('convertToArray', function() {
  it('二维数组转换为一维数组', function() {
    assert.deepEqual(
      [{a: 1}, {a: 2}],
      convertToArray( [ [{a: 1}], [{a: 2}] ] ))
  });
});
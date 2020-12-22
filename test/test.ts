import * as assert from 'assert';
import { convertArray } from '../src/index';

describe('convertArray', function() {
  it('二维数组转换为一维数组', function() {
    assert.deepEqual(
      [{a: 1}, {a: 2}],
      convertArray( [ [{a: 1}], [{a: 2}] ] ))
  });
});
import { expect } from 'chai';
import { convertArray, firstUpperCase, matchStr, sleep, compose } from '../src/index'

describe('convertArray', function() {
  it('二维数组转换为一维数组 [ [{a: 1}], [{a: 2}]  to [{a: 1}, {a: 2}]', function() {
    const result = convertArray( [ [{a: 1}], [{a: 2}] ] )

    expect([{a: 1}, {a: 2}]).to.deep.equal(result)
  });
});


describe('firstUpperCase', function() {
  it('首字母大写 xiaotian to Xiaotian', function() {
    const result = firstUpperCase('xiaotian')

    expect('Xiaotian').to.equal(result)
  });
});

describe('matchStr', function() {
  it(' match 不包含 AB 的字符 --aaaaaaaa!! to aaaaaaaa', function() {
    const result = matchStr('--aaaaaaaa!!', '--', '!!')
    const resultStr = result?.length ? result[0] : ''

    expect('aaaaaaaa').to.equal(resultStr)
  });
});

describe('sleep', function() {
  it('sleep Xms', async function () {
    console.log('sleep', Date.now())
    const result = await sleep(1)
    console.log('sleep', Date.now())

    // TODO: 暂时不知道咋写...
    expect('sleep').to.equal('sleep')
  });
});

describe('compose', function() {
  it('compose 0 to 3', function() {

    const add = (x: number) => ++x
    const result = compose(add, add, add)(0)

    expect(3).to.equal(result)
  });
});
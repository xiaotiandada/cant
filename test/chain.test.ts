import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

import { balanceDecimal, ERC20Profile } from '../src/index'

describe('balanceDecimal', function() {

  it('0.1234567 to 0.123', function() {
    const amount = balanceDecimal('0.123456789', 3)

    expect(amount).to.equal('0.123');
  });

  it('0.0 to 0', function() {
    const amount = balanceDecimal('0.0', 3)

    expect(amount).to.equal('0');
  });

  it('0.12 to 0', function() {
    const amount = balanceDecimal('0.12', 3)

    expect(amount).to.equal('0.12');
  });

  it('123 to 123', function() {
    const amount = balanceDecimal('123', 3)

    expect(amount).to.equal('123');
  });
});


describe('ERC20Profile', function() {
  it('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D', async function() {

    // ERC20Profile('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D', 97)
    // .then((res) => {
    //   console.log('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D: ', res)
    //   if (res) {
    //     expect(res).to.deep.equal({  symbol: 'FSB', name: '粉丝币123', decimals: 4 })
    //     done()
    //   } else {
    //     done('no token profile')
    //   }
    // })
    // .catch(e => done(e))

    expect(await ERC20Profile('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D', 97))
      .to.deep.equal({ symbol: 'FSB', name: '粉丝币123', decimals: 4 })
  });

  it('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D', async function() {
    expect(await ERC20Profile('0x8689e5AD15E4FB26d1Ca6552f471f2Bf9b37573D', 111))
      .to.deep.equal(undefined)
  });

  it('empty', async function() {
      expect(await ERC20Profile('', 97))
      .to.deep.equal(undefined)
  });
});
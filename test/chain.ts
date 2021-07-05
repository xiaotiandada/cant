import { expect } from 'chai';
import { balanceDecimal } from '../src/index'

describe('balanceDecimal', function() {

  it('0.1234567 to 0.123', function() {
    const amount = balanceDecimal('0.123456789', 3)

    expect(amount).to.equal('0.123');
  });

  it('0.0 to 0', function() {
    const amount = balanceDecimal('0.0', 3)

    expect(amount).to.equal('0');
  });
});
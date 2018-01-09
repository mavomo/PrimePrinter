let chai = require('chai'),
	path = require('path');

chai.should();

let PrimePrinter = require(path.join(__dirname, '../src/', 'primeprinter'));
let goldUtil = require(path.join(__dirname, '../src/', 'util'));

describe('PrimePrinter', () => {
	
	describe("#print the first 1000 primes", () => {
		it('output should matches gold content', () => {
			PrimePrinter.print().should.equal(goldUtil.GOLD);
		});
	});
	
});

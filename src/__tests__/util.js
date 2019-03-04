import { hashCode } from '../util';

describe('hashCode', () => {
	it('is stable', () => {
		const hashCodes = Array(10).fill('foo bar baz').map(hashCode);
		expect(hashCodes).toEqual(Array(10).fill(1892173108));
	});

	it('has distribution', () => {
		expect(hashCode('foo')).toStrictEqual(101574);
		expect(hashCode('bar')).toStrictEqual(97299);
		expect(hashCode('bar ')).toStrictEqual(3016301);
	});
});

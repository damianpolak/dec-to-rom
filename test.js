import test from 'ava';
import m from '.';

const reject = (t, boolean) => {
	return t.throws(() => {
		m(boolean);
	}, TypeError).message;
};

test('Rejects', t => {
  const message = 'Expected correct integer value between 1 - 100000';

  t.is(reject(t, ''), message);
  t.is(reject(t, 0), message);
  t.is(reject(t, undefined), message);
  t.is(reject(t, null), message);
});

test('Convert', t => {
	t.is(m(123), 'CXXIII');
	t.is(m(567), 'DLXVII');
	t.is(m(208), 'CCVIII');
	t.is(m(989), 'CMLXXXIX');
	t.is(m(1219), 'MCCXIX');
	t.is(m(3099), 'MMMXCIX');

	t.is(m(4444), 'MMMMCDXLIV');
	t.is(m(5456), 'MMMMMCDLVI');
	t.is(m(1001), 'MI');
	t.is(m(40215), 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCCXV');
});

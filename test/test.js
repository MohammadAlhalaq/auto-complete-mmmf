const test = require('tape');

const filterData = require('../src/logic');

test('test filterData function', (t) => {
  const excpected = ['Xllison Horne'];

  const actual = filterData('X');

  t.deepEqual(actual, excpected, `expected Xllison Horne but got ${actual}`);
  t.end();
});

test('find object', (t) => {
  const excpected = {};

  const actual = {};

  t.deepEqual(actual, excpected, 'test Failed');
  t.end();
});

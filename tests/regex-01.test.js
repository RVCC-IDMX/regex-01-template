const { testString, testStringMatch } = require('../src/regex-01');

test('testString', () => {
  expect(testString('Hello, World!', /Hello/)).toBe(true);
  expect(testString('Hello, World!', /World/)).toBe(true);
  expect(testString('Hello, World!', /Goodbye/)).toBe(false);
});

test('testStringMatch', () => {
  const sampleArray = ['dog', 'cat', 'bird', 'fish'];
  let sampleString = 'Charlie has a pet dog named Snoopy.';
  expect(testStringMatch(sampleString, sampleArray)).toBe(true);
  sampleString = 'John has a pet cat named Garfield.';
  expect(testStringMatch(sampleString, sampleArray)).toBe(true);
  sampleString = 'Granny has a pet bird called Tweety.';
  expect(testStringMatch(sampleString, sampleArray)).toBe(true);
  sampleString = 'Peppa has a pet fish named Goldie.';
  expect(testStringMatch(sampleString, sampleArray)).toBe(true);
  sampleString = 'Daria has a pet rock named Igneous.';
  expect(testStringMatch(sampleString, sampleArray)).toBe(false);
});

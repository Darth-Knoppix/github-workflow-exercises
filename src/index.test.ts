import { expect, test } from '@rstest/core';
import { prefix } from './utils';

test('prefix should prefix with arrow', () => {
  expect(prefix('test')).toBe('--> test');
});

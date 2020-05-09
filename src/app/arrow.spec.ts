import { Arrow } from './arrow';

describe('Arrow', () => {
  it('should create an instance', () => {
    expect(new Arrow(-1, -1, -1, -1, 'L')).toBeTruthy();
  });
});

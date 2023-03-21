import { generateData, generateEntry, capitalize } from './utils';

describe('Utilities test', () => {
  it('Should generate 100000 entries', () => {
    const data = generateData(100000);
    expect(data.length).toEqual(100000);
  });

  it('Should generate 1 entry on last position', () => {
    const entry = generateEntry();
    const entryKeys = Object.keys(entry);
    expect(entryKeys).toContain('name');
  });

  it('Should return the word capitalized', () => {
    const result = capitalize('virtualization');
    expect(result).toEqual('Virtualization');
  });
});

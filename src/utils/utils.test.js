import { generateData, generateEntry, capitalize } from './utils';

describe('Utilities test', () => {
  it('Should generate 100000 entries', () => {
    const data = generateData(100000);
    expect(data.length).toEqual(100000);
  });

  it('Should generate 1 entry on last position', () => {
    const lastEntry = 100000;
    const entry = generateEntry(lastEntry);
    expect(entry).toContain({ position: lastEntry + 1 });
  });

  it('Should return the word capitalized', () => {
    const result = capitalize('virtualization');
    expect(result).toEqual('Virtualization');
  });
});

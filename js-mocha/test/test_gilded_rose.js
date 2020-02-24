import fs from 'fs';
import expect from 'expect';
import { Shop, Item } from '../src/gilded_rose';

describe('Gilded Rose', () => {
  function readDayToItemsFromFile() {
    const lines = fs.readFileSync('test/stdout.gr', 'utf-8')
      .split('\n')
      .filter(Boolean);
    const numOfDays = lines.length / 11;
    const days = new Array(numOfDays).fill(0).map((v, i) => i);
    const dayToItems = days.reduce((map, x) => {
      const itemStr = lines.slice((x * 11) + 2, (x * 11) + 11);
      const items = itemStr.map((s) => {
        const y = s.split(',');
        return new Item(y.slice(0, y.length - 2).join(), parseInt(y[y.length - 2], 10), parseInt(y[y.length - 1], 10));
      });
      return { ...map, [x]: items };
    }, {});
    return dayToItems;
  }

  let dayToItems;

  before(() => {
    dayToItems = readDayToItemsFromFile();
  });

  it('should foo', () => {
    const gildedRose = new Shop(dayToItems['29']);
    const items = gildedRose.updateQuality();
    expect(items).toEqual(dayToItems['30']);
  });
});

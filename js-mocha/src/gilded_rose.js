/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

export default class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const agedBrie = 'Aged Brie';
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (item.name === agedBrie) {
        item.quality = Math.min(50, item.quality + (item.sellIn > 0 ? 1 : 2));
        item.sellIn -= 1;
        continue;
      } else if (item.name === backstagePasses) {
        item.quality = Math.min(50, item.quality + 1);
        if (item.sellIn < 11) {
          item.quality = Math.min(50, item.quality + 1);
        }
        if (item.sellIn < 6) {
          item.quality = Math.min(50, item.quality + 1);
        }
        item.sellIn -= 1;
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        continue;
      } else if (item.name === sulfuras) {
        continue;
      } else {
        item.quality = Math.max(0, item.quality - (item.sellIn > 0 ? 1 : 2));
        item.sellIn -= 1;
      }
    }
    return this.items;
  }
}

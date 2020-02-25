/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

export default class Shop {
  constructor(items = []) {
    this.items = items;
  }

  _updateBrie(item){
    item.quality = Math.min(50, item.quality+1);
  }

  updateQuality() {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const agedBrie = 'Aged Brie';
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    for (let i = 0; i < this.items.length; i+=1) {
      const item = this.items[i];
      if (item.name !== agedBrie && item.name !== backstagePasses) {
        if (item.quality > 0) {
          if (item.name !== sulfuras) {
            item.quality -= 1;
          }
        }
      } else if (item.quality < 50) {
        item.quality += 1;
        if (item.name === backstagePasses) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality += 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality += 1;
            }
          }
        }
      }
      if (item.name !== sulfuras) {
        item.sellIn -= 1;
      }
      if (item.sellIn < 0) {
        if (item.name !== agedBrie) {
          if (item.name !== backstagePasses) {
            if (item.quality > 0) {
              if (item.name !== sulfuras) {
                item.quality -= 1;
              }
            }
          } else {
            item.quality = 0;
          }
        } else if (item.quality < 50) {
          item.quality += 1;
        }
      }
    }

    return this.items;
  }
}

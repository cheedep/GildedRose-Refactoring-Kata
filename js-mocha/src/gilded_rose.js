/* eslint-disable max-classes-per-file */
/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import NonUpdater from './non-updater';
import BrieUpdater from './brie-updater';
import BackstagePassesUpdater from './backstage-updater';
import DefaultUpdater from './default-updater';

export default class Shop {
  static backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';

  static agedBrie = 'Aged Brie';

  static sulfuras = 'Sulfuras, Hand of Ragnaros';

  constructor(items = []) {
    this.items = items;
    this.defaultUpdater = new DefaultUpdater();
    const nonUpdater = new NonUpdater();
    const brieUpdater = new BrieUpdater();
    const backstagePassesUpdater = new BackstagePassesUpdater();
    this.updaters = {
      [Shop.agedBrie]: brieUpdater,
      [Shop.backstagePasses]: backstagePassesUpdater,
      [Shop.sulfuras]: nonUpdater
    };
  }

  getUpdater(item) {
    return this.updaters[item.name] || this.defaultUpdater;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      const updater = this.getUpdater(item);
      updater.update(item);
    }
    return this.items;
  }
}

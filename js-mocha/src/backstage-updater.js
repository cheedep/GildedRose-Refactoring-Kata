/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class BackstagePassesUpdater {
  update(item) {
    item.sellIn -= 1;
    item.quality = Math.min(50, item.quality + 1);
    if (item.sellIn < 10) {
      item.quality = Math.min(50, item.quality + 1);
    }
    if (item.sellIn < 5) {
      item.quality = Math.min(50, item.quality + 1);
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}

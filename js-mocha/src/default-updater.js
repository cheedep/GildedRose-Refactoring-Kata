/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class DefaultUpdater {
  update(item) {
    item.sellIn -= 1;
    item.quality = Math.max(0, item.quality - (item.sellIn >= 0 ? 1 : 2));
  }
}

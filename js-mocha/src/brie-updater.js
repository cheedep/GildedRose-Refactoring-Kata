/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class BrieUpdater {
  update(item) {
    item.quality = Math.min(50, item.quality + (item.sellIn > 0 ? 1 : 2));
    item.sellIn -= 1;
  }
}

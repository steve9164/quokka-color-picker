export default class QuokkaModel {
  constructor() {
    const neopixels = [];
    for (let i = 0; i < 10; i++) {
      neopixels.push({r: 0, g: 0, b: 0});
    }
    this.neopixels = neopixels;
  }
}
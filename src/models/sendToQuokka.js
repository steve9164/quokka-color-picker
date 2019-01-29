import convertHexToRgb from './convertHexToRgb';
const axios = window.axios;

const esp8266NeopixelsEndpoint = '/updateNeopixels';

export default function sendToQuokka(neopixels) {
  return axios.post(esp8266NeopixelsEndpoint, {
    neopixels: neopixels.map(convertHexToRgb)
  });
}
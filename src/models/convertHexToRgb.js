export default function convertHexToRgb(hexColor) {
  // Adapted from code written by Eric Kidd
  // https://coderwall.com/p/utcx1w/convert-hex-colors-to-rgb-in-js
  /* Check for # infront of the value, if it's there, strip it */

  if(hexColor.substring(0,1) == '#') {
    hexColor = hexColor.substring(1);
    }

  var rgbColor = {};

  /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
  rgbColor.r = parseInt(hexColor.substring(0,2),16);
  rgbColor.g = parseInt(hexColor.substring(2,4),16);
  rgbColor.b = parseInt(hexColor.substring(4),16);

  return rgbColor;
}
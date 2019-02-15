/**
 * @description 获取区间内随机值（整数）
 * @param min（整数）
 * @param max（整数）
 * @returns {number}
 */
function randomNum (min, max) {
  var length = max - min + 1
  var num = parseInt(Math.random() * length + min)
  return num
}

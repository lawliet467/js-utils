/**
 * @description 格式化价格，例12345.1  =》 12,345.10
 * @param value
 * @returns {string}
 */
function formatePrice(value) {
  value = (value + '').replace(/\.\d{2}(\d*)/, (match, $1) => match.replace($1, ''))//强制截取两位小数
  if (isNaN(value)) {
    return ''
  } else {
    //补0
    var s = value.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
  }
  //千分位打逗号
  return (s + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
}

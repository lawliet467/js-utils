/**
 * @description 判断是否url，包括IP，域名（domain），ftp，二级域名，域名中的文件，域名加上端口
 * @param url
 * @returns {boolean}
 */
function isURL (url) {
  var strRegex =
    '^((https|http|ftp|rtsp|mms)?://)' +
    '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' +
    '(([0-9]{1,3}.){3}[0-9]{1,3}' +
    '|' +
    '([0-9a-z_!~*\'()-]+.)*' +
    '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' +
    '[a-z]{2,6})' +
    '(:[0-9]{1,4})?' +
    '((/?)|' +
    '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$'
  var re = new RegExp(strRegex)
  if (re.test(url)) {
    return true
  } else {
    return false
  }
}

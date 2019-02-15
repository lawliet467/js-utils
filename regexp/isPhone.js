/**
 * @description 判断是否国内手机号
 * @param phone
 * @returns {boolean}
 */
function isPhone (phone) {
  var reg = /^((13[0-9])|(14[579])|(15[^4])|(18[0-9])|(17[0135678]))\d{8}$/
  return reg.test(phone)
}

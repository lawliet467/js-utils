/**
 * @description 判断是否Email
 * @param email
 * @returns {boolean}
 */
function isEmail (email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return reg.test(email)
}

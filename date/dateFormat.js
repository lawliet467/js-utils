
/**
 * @description 时间转换 例: dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')(兼容ie,火狐,safari等浏览器)
 * @param url, format
 * @returns {string}
 */
function dateFormat(date, format) {
  var date2 = ''
  var newDate = ''
  if (date && String(date).indexOf('-') > -1) {
    date2 = String(date).replace(RegExp('-', 'g'), '/')
    newDate = new Date(date2)
  } else {
    newDate = new Date(date)
  }
  // 校准本地时间(防止某些设备的时区不同)
  var localTime = newDate.getTime()
  var localOffset = newDate.getTimezoneOffset() * 60000 // 获得当地时间偏移的毫秒数
  var utc = localTime + localOffset // utc即GMT时间
  const offset = 8 // 以夏威夷时间为例，东10区
  var finalDate = utc + (3600000 * offset)
  newDate = new Date(finalDate)

  var newFormat = format
  const o = {
    'M+': newDate.getMonth() + 1, // month
    'd+': newDate.getDate(), // day
    'h+': newDate.getHours(), // hour
    'm+': newDate.getMinutes(), // minute
    's+': newDate.getSeconds(), // second
    'q+': Math.floor((newDate.getMonth() + 3) / 3), // quarter
    S: newDate.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(newFormat)) {
    newFormat = newFormat.replace(RegExp.$1, (`${newDate.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(newFormat)) {
      newFormat = newFormat.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length))
    }
  }
  return newFormat
}

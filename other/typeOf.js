/**
 * @description 通用判断对象类型
 * @param obj
 * @returns {String}
 */
function typeOf (obj) {
  let class2type = {}
  'Array Date RegExp Object Error'.split(' ').forEach(e => class2type['[object ' + e + ']'] = e.toLowerCase())
  if (obj == null) return String(obj)
  return typeof obj === 'object' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj
}

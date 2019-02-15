/**
 * @description 根据概率返回真假结果
 * @param probability
 * @returns {number}
 */
function randomResult (probability = 100) {
  let odds = Math.floor(Math.random() * 100)
  if (probability === 100) {
    return 1
  }
  return odds < probability ? 1 : 0
}

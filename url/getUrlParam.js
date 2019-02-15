/**
 * @description 获取url中参数
 * @param param
 * @returns {string | null}
 */
function getUrlParam(param){
  return decodeURIComponent((new RegExp('[?|&]'+param+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}

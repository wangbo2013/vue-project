/**
 * 判断对象是否为空
 * @param {*} obj
 */
export const isEmptyObj = (obj = {}) => {
  return (Object.keys(obj).length === 0 && obj.constructor === Object)
}

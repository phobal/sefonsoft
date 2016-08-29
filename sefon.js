import 'whatwg-fetch'

const Sefon = {
	/**
	 * 对fetch请求进行一次封装，对异常进行全局处理
	 * @param  {[type]} url请求的url  [description]
	 * @param  {[type]} opts请求的参数 [description]
	 * @return {[type]} 成功返回原有的promise,失败返回一个新的promise [description]
	 */
	fetch: function(url, opts) {
		return fetch(url, opts).then(reponse => reponse)
			.catch(e => {
				e.exception = true;
				return e;
			})
	},

	/**
	 * 判断字符是否为中文字符
	 * @param  {[type]} ch需要判断的字符 [description]
	 * @return {[type]} true/false   [description]
	 */
	isChese: function(ch) {
		return /^[\u4E00-\u9FA5]+$/.test(ch);
	},

	/**
	 * 获取字符串的真实长度，汉字长度为2，英文长度为1
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	getStrLen: function(str) {
		let len = 0;
		for (var i = str.length - 1; i >= 0; i--) {
			len += isChinese(str[i]) ? 2 : 1;
		}
		return len;
	},
	/**
	 * 对象扩展
	 * @param  {[type]}    目标对象 [description]
	 * @param  {...[type]} 源对象 [description]
	 * @return {[type]}   扩展后的最新对象     [description]
	 */
	extend: function(dst, ...src) {

	},
	/**
	 * 生成一个guid
	 * @return {[type]} [description]
	 */
	guid: function() {
		let f = () => {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return [`${f()}${f()}`, `${f()}`, `${f()}`, `${f()}`, `${f()}${f()}${f()}`].join('-');
	}
};

export default Sefon;
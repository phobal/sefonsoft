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
	isChese: fucntion(ch) {
		return /^[\u4E00-\u9FA5]+$/.test(ch);
	},

	/**
	 * 获取字符串的真是长度，汉字长度为2，英文长度为1
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	getStrLen: fucntion(str) {
		let len = 0;
		for (var i = str.length - 1; i >= 0; i--) {
			len += isChinese(str[i]) ? 2 : 1;
		}
		return len;
	},
	extend: fucntion(dst, ...src) {

	}
};

export default Sefon;
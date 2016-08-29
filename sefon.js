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
    },
    /**
     * 格式化时间
     * @param Date date 需要转换的时间
     * @param String str 转换的类型
     * @return String str 
     * 
     * example
     * formatDate(new Date(),"yyyy-mm-dd   hh:ii:ss  week");
     */
    formatDate: function(date, str) {
        str = str.toLowerCase();
        var that = this;

        if (/yyyy/.test(str)) { //年
            str = str.replace(/yyyy/, date.getFullYear());
        }
        if (/mm/.test(str)) { //月
            str = str.replace(/mm/, date.getMonth() + 1);
        }
        if (/dd/.test(str)) { //日·
            str = str.replace(/dd/, date.getDate());
        }
        if (/hh/.test(str)) { //小时
            str = str.replace(/hh/, function() {
                return date.getHours() >= 10 ? date.getHours() : ("0" + date.getHours());
            });
        }
        if (/ii/.test(str)) { //分
            str = str.replace(/ii/, function() {
                return date.getMinutes() >= 10 ? date.getMinutes() : ("0" + date.getMinutes());
            });
        }
        if (/ss/.test(str)) { //秒
            str = str.replace(/ss/, function() {
                return date.getSeconds() >= 10 ? date.getSeconds() : ("0" + date.getSeconds());
            });
        }
        if (/week/.test(str)) { //星期
            if (date.getDay() == 0) {
                str = str.replace(/week/, '星期日');
            }
            if (date.getDay() == 1) {
                str = str.replace(/week/, '星期一');
            }
            if (date.getDay() == 2) {
                str = str.replace(/week/, '星期二');
            }
            if (date.getDay() == 3) {
                str = str.replace(/week/, '星期三');
            }
            if (date.getDay() == 4) {
                str = str.replace(/week/, '星期四');
            }
            if (date.getDay() == 5) {
                str = str.replace(/week/, '星期五');
            }
            if (date.getDay() == 6) {
                str = str.replace(/week/, '星期六');
            }
        }

        return str
    }
};

export default Sefon;
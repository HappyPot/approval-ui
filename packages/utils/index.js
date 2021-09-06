import Vue from 'vue'
import Print from "../utils/print";
Vue.use(Print) // 注册Print
/**
 * @description: 处理时间格式   2019-01-01T13:13:13 => 2019-01-01
 * @param {type}:date{Date}
 * @return: Date
 */
function FormatRenderTime(date) {
    let t = date.replace(/T[0-9]{2}:[0-9]{2}:[0-9]{2}/g, " ")
    let b = t.replace(/\.[0-9]{0,}/, "")
    return b;
}
/**
 * @description: 处理时间格式   2019-01-01T13:13:13.123 => 2019-01-01 13:13:13
 * @param {type}:date{Date}
 * @return: Date
 */
function FormatRenderTime2(date) {
    let t = date.replace(/T/g, " ")
    let b = t.replace(/\.[0-9]{0,}/, "")
    return b;
}
// 打印
function printPage(vue) {
    var that = vue
    let version = getBrowserInfo();
    console.log("version: ", version);
    if (version.browser == "mozilla") {
        that.$print(that.$refs.print);
    } else {
        document.all.WebBrowser.execwb(7, 1);
    }
}
//获取浏览器版本
function getBrowserInfo() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re = /(msie|firefox|chrome|opera|version|mozilla|Mozilla).*?([\d.]+)/;
    var m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "'safari");
    Sys.ver = m[2];
    return Sys;
}

export default {
    FormatRenderTime2,
    FormatRenderTime,
    printPage,
    getBrowserInfo
};
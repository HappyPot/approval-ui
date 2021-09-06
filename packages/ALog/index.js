// 导入组件，组件必须声明 name
import ALog from './src/ALog.vue'

// 为组件提供 install 安装方法，供按需引入
ALog.install = function (Vue) {
    Vue.component(ALog.name, ALog)
}

// 默认导出组件
export default ALog
// 导入组件，组件必须声明 name
import AContent from './src/AContent.vue'

// 为组件提供 install 安装方法，供按需引入
AContent.install = function (Vue) {
    Vue.component(AContent.name, AContent)
}

// 默认导出组件
export default AContent
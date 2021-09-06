// 导入组件，组件必须声明 name
import AHeader from './src/AHeader.vue'

// 为组件提供 install 安装方法，供按需引入
AHeader.install = function (Vue) {
    Vue.component(AHeader.name, AHeader)
}

// 默认导出组件
export default AHeader
// 导入组件，组件必须声明 name
import ARemark from './src/ARemark.vue'

// 为组件提供 install 安装方法，供按需引入
ARemark.install = function (Vue) {
    Vue.component(ARemark.name, ARemark)
}

// 默认导出组件
export default ARemark
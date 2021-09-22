/**
 *
 */
import dgiot from './src/dgiot'
import _Vue from 'vue'
import dgiotStore from './src/store/index.js' // store
import dgiotDirectives from './src/directives/index.js' // directives
// import dgiotUtils from './src/utils /index.js' // ./src/utils /index.js
const component = require.context('./src/components', true, /\.vue$/) // components
const plugins = require.context('./src/plugins', true, /\.js$/) // plugins
const dgiotMixins= require.context('./src/mixins', true, /\.js$/) // mixins
dgiot.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.use(dgiotStore)
  Vue.use(dgiotDirectives)
  // Vue.use(dgiotUtils)
  dgiotMixins.keys().forEach(key => {
    Vue.mixin(dgiotMixins(key).default)
  })

  plugins.keys().forEach((fileName) => {
    plugins(fileName)
  })

  component.keys().forEach((fileName) => {
    const componentConfig = dgiotComponent(fileName)
    const componentName = componentConfig.default.name
    if (componentName)
      Vue.component(componentName, componentConfig.default || componentConfig)
  })

}
export default dgiot;

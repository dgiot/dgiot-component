# dgiot-component

<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/dgiot/dgiot-component" alt="ommit-activity">
	<img src="https://badgen.net/badge/package/%40dgiot%2Fdgiot-component/blue"
	alt="package" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/v/@dgiot/dgiot-component" alt="Npm Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/node/@dgiot/dgiot-component" alt="Node Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://badgen.net/jsdelivr/hits/npm/@dgiot/dgiot-component"
	alt="Jsdeliver Month Downloads" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/packagephobia/install/@dgiot/dgiot-component"
	alt="Install Size" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/types/@dgiot/dgiot-component" alt="Type Support"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://img.shields.io/librariesio/release/npm/@dgiot/dgiot-component"
	alt="Outdated Dep" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://img.shields.io/snyk/vulnerabilities/npm/@dgiot/dgiot-component"
	alt="Vulnerablities" maxretrytimes="3" class="m-1 transition-all duration-1000">
  <a href="https://www.npmjs.com/package/@dgiot/dgiot-component"><img src="https://img.shields.io/npm/l/@dgiot/dgiot-component" alt="License"></a>
<p>


![微服务架构图_02.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%9B%BE_02.png)




## Installation

```bash
yarn add @dgiot/dgiot-component
```

## Quick Start

### [main.js](https://github.com/dgiot/dgiot-Component-example/blob/master/src/main.js)
```diff
  import Vue from 'vue'
  import App from './App.vue'

  +import dgiotStore from '@dgiot/dgiot-component/src/store'
  +import dgiotBus from '@dgiot/dgiot-component/src/utils/bus'
  +import dgiotMixin from '@dgiot/dgiot-component/src/mixins/mqtt'

  Vue.use(dgiotBus)
  Vue.mixin(dgiotMixin)
  Vue.config.productionTip = false
  new Vue({
    dgiotStore,
    render: h => h(App),
  }).$mount('#app')
```

### [examples.vue](https://github.com/dgiot/dgiot-Component-example/blob/master/src/App.vue)
  ```diff
  <template>
    <div id="app">
      +<dgiot-component />
    </div>
  </template>

  <script>
  +import dgiotMqttDashboard from '@dgiot/dgiot-component/mqtt'
  export default {
    name: 'App',
    components: {
      +dgiotMqttDashboard
    },
    mounted() {
      console.log(this.Store)
    },
  }
  </script>
  ```
### Online examples

[![Edit gmullerb-react-reducer-provider](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/dgiot/dgiot-component)

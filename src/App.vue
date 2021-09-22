<template>
  <div>
    <mqtt />
  </div>
</template>

<script>
import mqtt from './components/Mqtt/mqtt'
export default {
  data(){
    return {
      initData: 'hello 你好'
    }
  },
  components:{
    mqtt
  }
}
</script>

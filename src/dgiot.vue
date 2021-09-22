<template>
  <div class="dgiot">{{ now }}</div>
</template>

<script>
import moment from "moment";
export default {
  name: "dgiot",
  components: {},
  data() {
    return {
      now: moment().format('YYYY-MM-DD HH:mm:ss.SSS')
    };
  },
  computed: {},
  methods: {},
  mounted() {

  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
</style>

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
    }, //鐢熷懡鍛ㄦ湡 - 鍒涘缓涔嬪墠
    beforeMount() {
    }, //鐢熷懡鍛ㄦ湡 - 鎸傝浇涔嬪墠
    beforeUpdate() {
    }, //鐢熷懡鍛ㄦ湡 - 鏇存柊涔嬪墠
    updated() {
    }, //鐢熷懡鍛ㄦ湡 - 鏇存柊涔嬪悗
    beforeDestroy() {
    }, //鐢熷懡鍛ㄦ湡 - 閿�姣佷箣鍓�
    destroyed() {
    }, //鐢熷懡鍛ㄦ湡 - 閿�姣佸畬鎴�
    activated() {
    } //濡傛灉椤甸潰鏈塳eep-alive缂撳瓨鍔熻兘锛岃繖涓嚱鏁颁細瑙﹀彂
  };
</script>

<style lang="scss" scoped>
</style>

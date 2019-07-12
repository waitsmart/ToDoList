<template>
  <div>
    <h1>待做事项</h1>
    <input type="text" 
    v-model="myValue"
    placeholder="请输入待做事项">
    <button @click="addToList()">add</button>
  </div>
</template>

<script>
export default {
  data:function(){
    return {myValue:''}
  },
  methods:{
    addToList:function(){
      // 通知数据仓库，要触发add这个操作
      this.$store.commit('add',this.myValue)
    }
  }
}
</script>

<style>

</style>

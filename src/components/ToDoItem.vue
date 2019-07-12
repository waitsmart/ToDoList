<template>
  <li>
    <span>{{content}}</span>
    <button @click="deleteFromList()">delete</button>
  </li>
</template>

<script>
export default {
  props:['content','myIndex'],
  methods:{
    deleteFromList:function(){
      this.$store.commit('delete',this.myIndex)
    }
  }
}
</script>

<style>
  
</style>

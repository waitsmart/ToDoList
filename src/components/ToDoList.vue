<template>
  <ul>
    <todoitem 
    :content="tmp"
    :myIndex="index"
    :key="index"
    v-for="(tmp,index) in myList"></todoitem>
  </ul>
</template>

<script>
export default {
  computed:{
    myList:function(){
      return this.$store.getters.list
    }
  }
}
</script>

<style>

</style>

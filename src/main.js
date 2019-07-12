// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
import ToDoList from '@/components/ToDoList'
import ToDoItem from '@/components/ToDoItem'
import ToDoInput from '@/components/ToDoInput'


Vue.component('todoinput',ToDoInput);
Vue.component('todoitem',ToDoItem);
Vue.component('todolist',ToDoList);
Vue.config.productionTip = false

// 数据仓库的初始化
const myStore = new Vuex.Store({
  // 初始化状态
  state:{
    list:[]
  },
  // 读状态中的值
  getters:{
    list:(state)=>{
      return state.list
    }
  },
  // 修改状态
  mutations:{
    add:(state,value)=>{
      // 添加
      console.log('准备添加');
      state.list.push(value);
    },
    delete:(state,index)=>{
      // 移除
      console.log('准备移除');
      state.list.splice(index,1)

    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:myStore,
  components: { App },
  template: '<App/>'
})

<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>   <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름= "현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoList v-bind:propsdata="todoItems" 
    v-on:removeItem="removeOneItem" 
    v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
 import TodoHeader from './components/TodoHeader.vue'
 import TodoInput from './components/TodoInput.vue'
 import TodoList from './components/TodoList.vue'
 import TodoFooter from './components/TodoFooter.vue'

//es5 기법
/*
var my_cmp = {
  template: '<div>my component</div>'
};


new Vue({
  el:'',
  components:{
    'my-cmp': my_cmp // -하이픈 케밥 기법
  }
});
*/

//es6 기법
export default{
    data(){
    return {
      todoItems: []
    }
  },
  methods:{ //mutaions
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem, index){
      this.todoItems[index].completed =  !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components : {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
   }
}

</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style:groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}

</style>

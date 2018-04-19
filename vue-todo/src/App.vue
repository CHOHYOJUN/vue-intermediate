<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>   <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름= "현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
 import TodoHeader from './components/TodoHeader.vue'
 import TodoInput from './components/TodoInput.vue'
 import TodoList from './components/TodoList.vue'
 import TodoFooter from './components/TodoFooter.vue'


//es6 문법
export default{
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

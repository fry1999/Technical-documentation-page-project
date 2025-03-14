<script setup lang="ts">
import {ref,reactive} from 'vue'
const todos=reactive([{
  id:1,
  text:'add your timeline'

}])
const newTodo=ref('')
const addTodo=()=>{
  if(newTodo.value.trim()==="") return
  const todo={
    id:todos.length+1,
    text:newTodo.value,
  }
  todos.push(todo)
  newTodo.value="";
}
const deTodo=()=>{
  todos.pop()
  newTodo.value="";
}

</script>

<template>
  <h1>To do list</h1>
  <br>
  <input type="text" v-model="newTodo" @keyup.enter="addTodo"/>
  <button class="add-btn" @click="addTodo">Add to do</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button class="de-btn" @click="deTodo">-</button>

    </li>
  </ul>
  
</template>

<style>
  body{
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color:#1b1b32;
  color: #f5f6f7;
}
h1{
  color: rgb(125, 125, 227);
  padding: 10px 5px;
  border-radius: 15px;
  
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 350px;
  font-family: 'Castoro Titling', cursive;
}
input{
  display: block;
  font-size: 2.5rem;
  width: 100%;
  height:60px;
  padding: 6px 12px;
  margin: 10px 0;
  line-height: 1.4;
  color:white;
  background-color: #0a0a23;
  border: 1px solid #f5f6f7;
  margin-top: 15px;
}
button{
  cursor: pointer;
  text-decoration: none;
  
}
.add-btn:hover{
  background-image: rgb(210, 160, 168);
}
.add-btn{
  display: block;
  font-size: 1.5rem;
  margin: 10px 0;
  line-height: 1.4;
  color:white;
  background-image: linear-gradient(#331b40, #5e2b7a);
  border: 1px solid #5f5761;
  margin-top: 15px;

}
.de-btn{
  color:black;
  background-color: rgb(165, 17, 17);
  border-radius: 20px;
}
.ul{
  text-decoration: none;
}

</style>

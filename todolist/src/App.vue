<script setup lang="ts">
import {ref,reactive,computed, watch} from 'vue';

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos=reactive<Todo[]>([])
const newTodo=ref('')
const editTodoId=ref<number|null>(null)
const editTodoText=ref('')
const filter=ref<'all'|'active'|'completed'>('all')


watch(todos,()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
},{deep:true})

const addTodo=()=>{
  if(newTodo.value.trim()==="") return
  const todo={
    id:todos.length+1,
    text:newTodo.value,
    completed:false
  }
  todos.push(todo)
  newTodo.value="";
}

const deTodo=(id:number)=>{
  const index=todos.findIndex(todo=>todo.id===id)
  if(index!==-1)todos.splice(index,1)
}

const toggleComplete=(todo:{completed:boolean})=>{
  todo.completed=! todo.completed
}

const startEdit=(todo:Todo)=>{
  editTodoId.value=todo.id
  editTodoText.value=todo.text
}

const saveEdit=(todos:Todo)=>{
  if(editTodoText.value.trim()==='')return
  todos.text=editTodoText.value
  editTodoId.value=null
  editTodoText.value=''
}

const filteredTools=computed(()=>{
  if(filter.value==='active')return todos.filter(todo=>!todo.completed)
  if(filter.value==='completed') return todos.filter(todo=>todo.completed)
  return todos
})

</script>

<template>
  <h1>To do list</h1>
  <br>
  <input type="text" v-model="newTodo" @keyup.enter="addTodo"/>
  <button class="add-btn" @click="addTodo">Add to do</button>

  <div class="filter">
    <button :class="{active:filter==='all'}" @click="filter='all'">All</button>
    <button :class="{active:filter==='active'}" @click="filter='active'">incomplete</button>
    <button :class="{active:filter==='completed'}"@click="filter='completed'">Completed</button>
  </div>

  <ul v-if="filteredTools.length>0">
    <li v-for="todo in filteredTools" :key="todo.id"  @click="toggleComplete(todo)"
    :class="{completed:todo.completed}">
      <span v-if="editTodoId !== todo.id" @dblclick="startEdit(todo)">{{ todo.text }}</span>
      <input v-else type="text" v-model="editTodoText" @keyup.enter="saveEdit(todo)" @blur="saveEdit(todo)" class="edit-input"/>

      <button class="de-btn" @click.stop="deTodo(todo.id)">-</button>
      <input type="checkbox" v-model="todo.completed" class="checkbox"/>

    </li>
  </ul>  
  <p v-else="filteredTools.length===0">Không có công việc nào.</p>
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
.completed{
  text-decoration: line-through;
  color: gray;
}
.filter{
  margin: 10px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.filter button{
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background: #5e2b7a;
  color: white;
  border-radius: 5px;
}
.filter button.active{
  background:#3e1f5a;
}
.edit-input{
  font-size: 18px;
  width: 100%;
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
ul{
  margin-bottom: 20px;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding:8px;
  cursor: pointer;
}
.checkbox, .de-btn {
  width: 24px; 
  height: 24px;
}


.checkbox{
  cursor: pointer;
}
.de-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(165, 17, 17);
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

</style>
<script setup lang="ts">
import {ref} from 'vue'
const count=ref(0)
count.value++
const increase=()=>count.value++
const decrease=()=> count.value--
</script>

<template>
  <div>
    <h1>Counter App</h1>
    <p>{{ count }}</p>
    <button type="submit" @click="decrease">Decrease</button>
    <button type="submit" @click="increase">increase</button>
  </div>
  
</template>

<style>
body{
  background-color: #996699;
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  
}
h1{
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: 'Castoro Titling', cursive;
}
p{
  color: white;
  font-size: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  font-family: 'Castoro Titling', cursive;
}

button{
  display: inline-block;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  background-image: linear-gradient(#b65683, #a783bb);
  padding: 10px 16px;
  font-size:1.5rem;
  width: 100%;
}

</style>


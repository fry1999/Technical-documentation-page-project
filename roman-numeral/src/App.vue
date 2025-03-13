<script setup>
import {ref} from 'vue';
const numberInput=ref('');
const output=ref('');
const convertToRoman=(num)=>{
  if(num<=0||num>=4000){
    return 'Please enter number between 1 to 3999';
  }
  const romanNumerals = [
    {value:1000,numeral:'M'},
    {value:900,numeral:'CM'},
    {value:500,numeral:'D'},
    {value:400,numeral:'CD'},
    {value:100,numeral:'C'},
    {value:90,numeral:'XC'},
    {value:50,numeral:'L'},
    {value:40,numeral:'XL'},
    {value:10,numeral:'X'},
    {value:9,numeral:'IX'},
    {value:5,numeral:'V'},
    {value:4,numeral:'IV'},
    {value:1,numeral:'I'},
  ];
  let roman='';
  for(const{value,numeral}of romanNumerals){
    while(num>=value){
      roman+=numeral;
      num-=value;
    }
  }
  return roman;
};
const convertNumber=()=>{
  const num=parseInt(numberInput.value,10);
  if (isNaN(num)) {
    output.value = 'Please enter a valid number';
  } else {
    output.value = convertToRoman(num);
  }
};

</script>

<template>
  <main>
    <img class="freecodecamp-logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="Freecodecamp Logo">
    <h1> Roman Numeral Converter</h1>
    <form class="form" @submit.prevent>
      <fieldset>
        <label for="number">Enter a number:</label>
        <br>
        <input type="number" id="number" v-model="numberInput" required>
        <button type="submit" @click="convertNumber" @keydown.enter="convertNumber">Convert</button>
      </fieldset>
    </form>
    <div id="output" class="output" v-if="output">{{ output }}</div>
  </main>
  
</template>

<style >
body{
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color:#1b1b32;
  color: #f5f6f7;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.freecodecamp-logo{
  height: 30px;
  margin-bottom: 20px;
}
.h1{
  text-align: center;
  margin: 20px auto;
  max-width: 350px;
  font-family: 'Castoro Titling', cursive;
}
form, .output {
  width: 90%;
  max-width: 500px;
  margin: 10px auto; 
}

form{
  padding: 25px;
  color:#f5f6f7;
  margin:auto 25px;
  border:3px solid #f5f6f7;
  text-align: center;
  width: 90%;
  max-width: 500px;
  background-color: #3b3b4f;
}
fieldset{
  border: 0 none;
  height: 100%;
  padding: 25px;
  margin: 10px 20px;
}
label{
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
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
  border: 1px solid #f5f6f7
}
button{
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
  padding: 10px 16px;
  font-size:23;
  width: 100%;
}
.output{
  color: white;
  background-color: #3b3b4f;
  border: 3px solid #f5f6f7;
  font-size: 2.5rem;
  width: 90%;
  max-width: 500px;
  min-height: 55px;
  margin-top: 25px;
  padding: 15px;
  overflow-wrap: break-word;
  text-align: center;
  
}
</style>



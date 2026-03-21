<script setup>
import {ref, reactive} from 'vue'
import addNumber from './components/addNumber.vue'
// const number = ref(5)
// const name = ref("Korapin")
// const lastname = ref("Suandokmai")

// const imgUrl = "https://th.bing.com/th/id/OIP.WF2ASOBPwpq9r1CxEHdxcgHaHa?w=188&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
// const link = "https://th.bing.com/th/id/OIP.WF2ASOBPwpq9r1CxEHdxcgHaHa?w=188&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

// const age = ref(18)
// const score = ref(61)
// const colors = ["black, pink"]
// const users = [
//   {name: "Toey", age: 18},
//   {name: "Tony", age: 19},
//   {name: "Toly", age: 20}
// ]

// const forNum = [1, 2, 3, 4, 5]


// function countNumber(){
//   return number.value + 1
// }

// const count = reactive({count : 0})

// function fullname(){
//   return `${name.value} ${lastname.value}`
// }

// function countNum() {
//   count.count ++
// }

// const userText = ref("")

// function log() {
//   console.log(userText.value)
// }


const message = ref("")
const isTrue = ref(false)
function submit(){
  isTrue.value = !isTrue.value
}

function submittion() {
  alert("Hello Korapin")
  console.log(message.value)
}

// function isTyping(){
//   console.log("This is Typing.")
// }

</script>


<template>

  <addNumber />
  <addNumber />

  <form @submit.prevent="submittion">
    <input v-model="message" type="text" placeholder="Typing...">
    <p v-show="isTrue">{{ message }}</p>
    <button @click="submit">Submit</button>
  </form>

  
  <!-- <button @click="showmessage()">click me</button>
  <p v-show="isTrue">{{ message }}</p>

  <form @submit="submittion">
    <input type="input">
    <button type="submit">Submit</button>
  </form>

  <input @input="isTyping()" placeholder="Typing.."> -->

  

<!-- 
  <div>
    <input v-model="userText">
    <p>{{ userText }}</p>
    <p>{{ log() }}</p>
  </div>

  {{ number }}
  {{ name }}
  {{ countNumber() }}
  {{ fullname() }}

  <img v-bind:src="imgUrl" alt="" style="width: 200px;">
  <a :href="link">link</a>
  <p v-if="age <= 18">Yong</p>
  <p v-else-if="age >= 60">Old</p>
  <p v-else>Adult</p>

  <p v-if="score >= 80">Grade A</p>
  <p v-else-if="score >= 70">Grade B</p>
  <p v-else-if="score >= 60">Grade C</p>
  <p v-else >Grade F</p>

  <ul>
    <p v-for="color in colors">
      {{ color }}
    </p>
  </ul>

  <ul>
    <p v-for="user in users">
      {{ user.name }} - {{ user.age }}
    </p>
  </ul>

  <p v-for="n in forNum">
    Number: {{ n }}
  </p>

  {{ count }}
  <button @click="countNum()">+</button> -->
</template>

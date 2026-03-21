<script setup>
import { ref, onMounted } from 'vue'
 
const movies = ref([])
 
const fetchMovies = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/movies')
    const data = await res.json()
    movies.value = data
  } catch (err) {
    console.error(err)
  }
}
 
onMounted(() => {
  fetchMovies()
})
 
const seats = ref([])
 
const fetchSeats = async (movieId) => {
  const res = await fetch(`http://localhost:3000/api/seats/${movieId}`)
  const data = await res.json()
  seats.value = data
}


function selectMovie() {
  alert("จองเเระนะ")
}

</script>
 
<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4"> MOVIE BOOKING</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="m in movies" :key="m.id" class="shadow-lg rounded-lg p-3">
        <img :src="m.img" class="rounded-lg w-full h-40 object-cover" />
        <p class="font-bold mt-2">{{ m.title }}</p>
        <p class="text-blue-600">{{ m.price }} บาท</p>

        <button
          class="bg-blue-500 text-white px-3 py-1 rounded mt-2 w-full"@click="selectMovie">จองที่นั่ง</button>
      </div>
    </div>
  </div>

  


</template>
<style>

</style>


<script setup>
    import {ref} from 'vue'
    const number = ref(0)
    function countNumber() {
        number.value ++
    }

</script>

<template>
    <button @click="countNumber">+</button>
    <p>{{ number }}</p>
</template>

<style></style>
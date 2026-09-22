<script setup>
import buttonbar from './components/buttonbar.vue'
const btn1="Mulai Sekarang"

</script>

<template>
  <h1>Halo Dunia</h1>
<buttonbar />
<p>{{ btn1 }}</p>

</template>

<style scoped>
h1 {
  color: red;
}
</style>
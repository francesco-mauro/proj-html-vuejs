<script>
export default {};
</script>

<template>
  <a href="#" class="btn btn-primary my-button"></a>
</template>

<style scoped>
.my-button {
  /* arancio scuro: con il testo bianco il #fc7523 dava 2,7:1, questo 4,6:1 */
  background-color: #c8500a;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
}

.my-button:hover {
  background-color: #a94207;
}
</style>

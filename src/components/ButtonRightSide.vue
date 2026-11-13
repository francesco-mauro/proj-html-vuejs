<script>
export default {};
</script>

<template>
  <!-- Pulsanti decorativi della replica di Avada: non portano da nessuna parte,
       quindi fuori dalla tastiera e dagli screen reader, e niente salto in cima al clic -->
  <a href="#" class="top-btn" aria-hidden="true" tabindex="-1" @click.prevent>
    <i class="fa-solid fa-folder-plus"></i>
  </a>
  <a href="#" class="bottom-btn" aria-hidden="true" tabindex="-1" @click.prevent>
    <i class="fa-solid fa-cart-shopping"></i>
  </a>
</template>

<style lang="scss" scoped>
.top-btn {
  position: fixed;
  top: 15rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  text-decoration: none;
  transition: 0.2s ease-out;

  i {
    font-size: 1.6rem;
    color: #33465B;
  }
}

.bottom-btn {
  position: fixed;
  top: 19.2rem;
  right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  text-decoration: none;
  transition: 0.2s ease-out;

  i {
    font-size: 1.6rem;
    color: #33465B;
  }
}

/* Sotto i 992px il menu va su più righe e i pulsanti fissi coprivano «Blog»: li nascondiamo */
@media (max-width: 991.98px) {
  .top-btn,
  .bottom-btn {
    display: none;
  }
}

.top-btn:hover,
.bottom-btn:hover {
  
  background-color: orange;

  i {
    color: #fff;
  }
}
</style>

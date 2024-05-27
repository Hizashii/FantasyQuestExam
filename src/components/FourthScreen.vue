<template>
  <div class="container-fluid mt-5 text-center">
    <div class="carousel-wrapper">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img :src="characters[0].image" class="d-block w-100" alt="Character 1">
          </div>
          <div class="carousel-item" data-bs-interval="2000" >
            <img :src="characters[1].image" class="d-block w-100" alt="Character 2">
          </div>
          <div class="carousel-item" >
            <img :src="characters[2].image" class="d-block w-100" alt="Character 3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import violinElf from '@/assets/violinelf.png';
import WhiteElf from '@/assets/WhiteElf.png';
import RedElf from '@/assets/RedElf.png';

export default {
  name: 'SecondScreen',
  data() {
    return {
      characters: [
        { image: violinElf },
        { image: WhiteElf },
        { image: RedElf }
      ]
    };
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
}

.text-white {
  color: white;
}

.carousel-wrapper {
  width: 87%; 
  margin: 0 auto;
}

.carousel-item img {
  object-fit: cover;
  height: 87vh; 
}
</style>

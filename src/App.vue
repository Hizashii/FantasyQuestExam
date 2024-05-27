<template>
  <div id="app">
    <LoadingAnimation v-if="isLoading"></LoadingAnimation>
    <main :class="{ 'hide-content': isLoading }" v-if="!isLoading">
      <FirstScreen />
      <FifthScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <CharacterInfo/>
      <SixthScreen />
      <SeventhScreen/>
      <Bottom/>

    </main>
  </div>
</template>

<script setup>
import LoadingAnimation from './components/LoadingAnimation.vue'; 
import FirstScreen from './components/FirstScreen.vue';
import SecondScreen from './components/SecondScreen.vue';
import ThirdScreen from './components/ThirdScreen.vue';
import FourthScreen from './components/FourthScreen.vue';
import FifthScreen from './components/FifthScreen.vue';
import CharacterInfo from './components/CharacterInfo.vue';
import SixthScreen from './components/SixthScreen.vue';
import SeventhScreen from './components/SeventhScreen.vue';
import Bottom from './components/Bottom.vue';


import { ref } from 'vue'; 

const isLoading = ref(true); 

setTimeout(() => {
  isLoading.value = false; 
}, 7000); 
</script>

<style scoped>
.hide-content {
  opacity: 0;
  transition: opacity 0.5s ease-out; 
}


main:not(.hide-content) {
  opacity: 1;
}
</style>

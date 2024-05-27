<template>
  <div class="loading-animation" :class="{ 'lifted': isVideoEnded }">
    <video ref="video" autoplay muted loop class="video-background" @ended="onVideoEnded">
      <source src="@/assets/loading_screen.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoRef = ref(null);
const isVideoEnded = ref(false);

// Function to handle video end
const onVideoEnded = () => {
  isVideoEnded.value = true;
}
</script>

<style scoped>
.loading-animation {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hide overflow to prevent content from showing outside the viewport */
  transition: transform 1s ease-out; /* Smooth transition for lifting effect */
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lifted {
  transform: translateY(-50vh); 
}


@media (max-width: 768px) {
  .loading-animation {
    transition: transform 0.5s ease-out;
  }

  .lifted {
    transform: translateY(-50vh);
  }
}

@media (max-width: 480px) {
  .loading-animation {
    transition: transform 0.3s ease-out; 
  }

  .lifted {
    transform: translateY(-50vh); 
  }

  .video-background {
    object-fit: contain; 
  }
}
</style>

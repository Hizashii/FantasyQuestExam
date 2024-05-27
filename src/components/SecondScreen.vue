<template>
  <div class="second-screen">
    <h1 class="text-center mb-4" v-motion-pop-visible>Watch a video and dive into the plot...</h1>
    <div class="video-container" >
      <video controls autoplay loop>
        <source src="@/assets/Men.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondScreen",
});
</script>

<style scoped>

/* Target the h1 tag directly */
h1 {
  color: white; /* Set the color to white */
}

.second-screen {
  margin-top: 10%;
  text-align: center;
  color: white; /* Center the text horizontally */
}

.video-container {
  max-width: 87%; 
  margin: 0 auto; 
}

.video-container video {
  width: 100%;
  height: auto;
}
</style>

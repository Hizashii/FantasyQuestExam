<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="big-title"  v-motion-pop-visible>Dive into the Magical Side of Esbjerg</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="content" >
              <img src="@/assets/Horns.png" alt="Horns" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="content" >
              <img src="@/assets/BlueWizzard.png" alt="Blue Wizzard" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="box">
            <div class="content">
              <p class="window-text" v-motion-pop-visible>
                One day the clouds gathered over the sea to the west, and it became
                unnaturally dark. Lightning tore the sky. A large, winged creature
                could be seen in the sky. The four statues stood up, the guardians had
                been awakened, they got ready and shouted.  The cries could be heard across the land, across portals to other
                worlds. "There is a need for heroes in Esbjerg!", they shouted. It's
                time for the heroes to gather. It is time for evil to be fought. It is
                time for the portals to close. It's time for Fantasy Quest Esbjerg - are
                you ready?
              </p>
            </div>
          </div>
        </div>
      </div>
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
.big-title {
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.window-text {
  font-size: 1.2rem;
  text-align: left;
}
</style>

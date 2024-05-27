<template>
  <div class="history-page" v-motion-pop-visible> 
    <h2 class="title" v-motion-pop-visible>How it looks like</h2>
    <div class="content" >
      <div class="text-section" v-motion-pop-visible>
        <p>
          Fantasy Quest Esbjerg is an experience race that you can take part in during the Fantasy Festival in Esbjerg on 14 September 2024. The race contains a quest with tasks that must be solved along the route. The quest is based on a unique fantasy story written in collaboration with Salmon Rider. You can participate in the AftenQuest both alone and with friends.
        </p>
      </div>
      <div class="image-section" v-motion-pop-visible>
        <img src="@/assets/misterfish.png" alt="Mister Fish" class="photo-frame" />
      </div>
    </div>
    <div class="bottom-text" v-motion-pop-visible>
      <p>
        When twilight begins to descend over Esbjerg, the level of difficulty in the quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation, and ingenuity in order for you to complete the quest and save Esbjerg.
      </p>
    </div>
  </div>
</template>

<style scoped>
.history-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white; /* Set color to white */
  padding: 40px 20px;
  font-family: 'Sell Your Soul', sans-serif;
}

.title {
  font-size: 2.5em;
  margin: 30px 0 20px 0;
  color: white; /* Ensure title color is white */
}

.content {
  display: flex;
  align-items: flex-start; /* Align items at the start of the flex container */
  width: 80%;
  margin: 20px 0;
}

.text-section {
  flex: 1;
  text-align: left;
  padding-right: 15px;
  margin-right: 25px; /* Adjusted margin */
}

.text-section p {
  font-size: 1.4em;
}

.image-section {
  flex: 1;
  text-align: center;
}

.photo-frame {
  width: 300px;
  height: 310px;
  object-fit: cover;
  border: 2px solid white;
}

.bottom-text {
  width: 80%;
  margin-top: 20px;
  text-align: left;
}

.bottom-text p {
  font-size: 1.4em;
  word-wrap: break-word; /* Allow long words to break and wrap */
  white-space: pre-wrap; /* Preserve white-space */
  overflow-wrap: break-word; /* Allow words to break at hyphens */
  line-height: 1.8; /* Adjust line height for better readability */
}

/* Responsive Styles */
@media (max-width: 992px) {
  .content {
    flex-direction: column; /* Change to column layout on smaller screens */
  }
  
  .text-section, .image-section {
    width: 100%; /* Make sections full width on smaller screens */
    margin: 0; /* Remove margin */
    padding: 0; /* Remove padding */
  }
  
  .text-section {
    margin-bottom: 20px; /* Add margin between text and image */
  }
}
</style>

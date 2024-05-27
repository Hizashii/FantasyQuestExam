<template>
  <div class="container-fluid mt-5 mb-5-custom" >
    <h2 class="info-title text-center" >INFO</h2>
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-md-start text-center text-white">
        <!-- Location -->
        <div class="icon-container mb-2">
          <img src="@/assets/location.svg" alt="Location" class="icon mr-2">
          <p class="info-text">Torvet, 6700 Esbjerg, Danmark</p>
        </div>
        <!-- Date -->
        <div class="icon-container mb-2" >
          <img src="@/assets/calendar.svg" alt="Calendar" class="icon mr-2">
          <p class="info-text">14. September 2024</p>
        </div>
        <!-- Time -->
        <div class="icon-container mb-2" >
          <img src="@/assets/time.png" alt="Clock" class="icon mr-2">
          <p class="info-text">18.00-22.30</p>
        </div>
        <!-- Buy Tickets -->
        <img @click="buyTickets" src="@/assets/buytickets.png" alt="Buy Tickets" class="buy-tickets-img">
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center" >
        <div class="image-container">
          <img :src="eventImage" alt="Event Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import eventImage from '@/assets/Esbjergmap.png';

export default {
  name: "SixthScreen",
  data() {
    return {
      eventImage
    };
  },
  methods: {
    buyTickets() {
      window.open("https://www.ticketmaster.dk/artist/fantasyfestival-billetter/1233494", "_blank");
    }
  }
};
</script>

<style scoped>
.info-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
}

.container-fluid {
  padding: 2rem;
  margin-top: 50px;
}

.mb-5-custom {
  margin-bottom: 80px;
}

.image-container {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.info-text {
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
}
.icon-container {
  display: flex;
  align-items: left;
}

.icon {
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  margin-right: 10px; /* Add spacing between icon and text */
}

.buy-tickets-img {
  width: 300px; 
  height: auto;
  cursor: pointer; 
  transition: transform 0.2s;
}

.buy-tickets-img:hover {
  transform: scale(1.05); /* Apply scale transformation on hover */
}
</style>

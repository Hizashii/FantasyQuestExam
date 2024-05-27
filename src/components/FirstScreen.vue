<template>
  <div class="main-container">
    <header class="header">
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="Logo" class="logo">
              </a>
            </div>
            <ul class="nav justify-content-space-between"> 
              <li class="nav-item active">
                <a class="nav-link" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">INFO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <button class="translate-button" @click="translate">
                <img src="@/assets/translatebutton.png" alt="Translate" class="translate-button-icon">
              </button>
            </ul>
          </div>
        </nav>
        <div class="text-container mt-5">
          <div v-motion-pop-visible>
            <h1 class="mb-3">Fantasy Quest Esbjerg</h1>
          </div>
          <div class="buy-tickets mb-3" v-motion-pop-visible>
            <button @click="buyTickets" class="buy-tickets-button">
              <img src="@/assets/buytickets.png" alt="Buy Tickets" class="buy-tickets-img">
            </button>
          </div>
          <div class="dragon-image">
            <img src="@/assets/DragonBlue.png" alt="Blue Dragon" class="dragon">
          </div>
        </div>
        <div class="evil-image">
          <img src="../assets/EvilWitch.png" alt="Red Evil" />
        </div>
        <div class="bottom-left-box" v-motion-pop-visible>
          <div class="bottom-left-text">
            <div class="centered-text">
              Are you ready to dive into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world?
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GoogleTranslateSelect from '@google-translate-select/vue3';

export default defineComponent({
  name: "FirstScreen",
  components: {
    GoogleTranslateSelect,
  },
  methods: {
    buyTickets() {
      window.open("https://www.ticketmaster.dk/artist/fantasyfestival-billetter/1233494", "_blank");
    },
    async handleGoogleTranslateSelect(language) {
      try {
        // Get all text content on the page
        const allTextElements = document.querySelectorAll('*:not(script):not(style)');
        const textToTranslate = Array.from(allTextElements).map(element => element.textContent.trim()).join('\n');

        // Translate the text to the specified language
        const translationResponse = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language}&dt=t&q=${encodeURIComponent(textToTranslate)}`);
        const translationData = await translationResponse.json();

        // Extract the translated text
        const translatedText = translationData[0].map(part => part[0]).join('\n');

        // Update all text content on the page with the translated text
        Array.from(allTextElements).forEach((element, index) => {
          element.textContent = translatedText.split('\n')[index];
        });

        console.log(`Website translated to ${language}`);
      } catch (error) {
        console.error("Translation error:", error);
      }
    }
  }
});
</script>

<style scoped>
@font-face {
  font-family: 'Caudex';
  src: url('../assets/Caudex.ttf') format('truetype');
}


body,
html,
.header,
.navbar-brand,
.nav-link,
h1 {
  font-family: Caudex;
  color: white;
}

p {
  color: white;
}
.bottom-left-box {
  width: 500px;
  height: 250px;
  position: absolute;
  bottom: 20px;
  left: 100px;
  padding: 20px;
  box-sizing: border-box;
}

.centered-text {
  font-size: 25px;
  text-align: left;
  color: white;
}
h1{
  font-size: 64px;
}
.header {
  padding: 20px 0;
  margin-bottom: 80px; /* Add space of 50px between this component and the one below */

}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  fill: white;
}

.navbar-nav li {
  flex: 1;
}

.navbar-nav .nav-link {
  font-size: 20px;
}

.navbar-nav .nav-link:hover {
  color: #ccc;
}

.text-container {
  text-align: center;
  width: 100%;
  margin-bottom: 10vh; /* Increased space */
}

.dragon-image {
  position: absolute;
  top: 120px; /* Adjust as needed */
  left: -220px; /* Adjusted position */
  opacity: 75%;
}


.dragon {
  width: 35%;
  height: auto;
}

.evil-image img {
  position: absolute;
  bottom: 0;
  right: 215px;
  transform: translateX(25%);
  display: block; 
  overflow: hidden; 
  width:max-content;
  margin: 0px;
  line-height: 0%;
  box-sizing: border-box;
  line-height: 0%;
  width: max-content;
  height: 75%;
}

.container {
  padding: 0;
  width: 100%;
  margin-bottom: 25%; /* Add margin from the bottom */

}

.translate-button {
  border: none;
  background: none;
  cursor: pointer;
}

.translate-button:focus {
  outline: none; /* Remove default focus outline */
}

.translate-button:hover .translate-button-icon {
  transform: scale(1.1); /* Scale up the icon on hover */
}

.translate-button-icon {
  width: 40px;
  height: 40px;
}

.buy-tickets-button {
  background-color: transparent; /* Make the button transparent */
  border: none; /* Remove border */
  cursor: pointer; /* Change cursor to pointer */
}

.buy-tickets-img {
  width: 300px; /* Adjust the width as needed */
  height: auto;
  transition: transform 0.2s;
}

.buy-tickets-button:hover .buy-tickets-img {
  transform: scale(1.05); /* Apply scale transformation on hover */
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .navbar-nav {
    flex-direction: row;
  }
  .text-container {
    width: 50%;
  }
  .dragon {
    width: 35%;
  }
  .evil-image {
    width: 70%;
  }
}

@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column;
  }
  .text-container {
    width: 70%;
  }
  .dragon {
    width: 50%;
  }
  .evil-image {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .text-container {
    width: 80%;
  }
  .dragon {
    width: 60%;
  }
  .evil-image {
    width: 90%;
  }
}

@media (max-width: 576px) {
  .navbar-header, .navbar-nav, .navbar-right {
    text-align: center;
  }
  .text-container {
    width: 90%;
  }
  .dragon {
    width: 80%;
  }
  .evil-image {
    width: 95%;
  }

  .dragon-image,
  .evil-image {
    display: none; /* Hide images on smaller screens */
  }

  .text-container {
    width: 80%; /* Adjusted width for responsiveness */
    margin: 0 auto; /* Center the text container */
  }

  .centered-text {
    text-align: center; /* Center the text */
  }

  .bottom-left-box {
    width: 80%; /* Adjusted width for responsiveness */
    margin: 20px auto; /* Center the box and add spacing */
    bottom: 15px; /* Adjusted  position from bottom */
    left: 0; /* Adjusted position from left */
    right: 0; /* Adjusted position from right */
    padding: 20px;
    box-sizing: border-box;
    text-align: center; /* Center the text */
  }
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer-title" v-motion-pop-visible>Join our magical community</h2>
      <div class="social-icons" v-motion-pop-visible>
        <img src="@/assets/facebook.png" alt="Facebook" class="social-icon">
        <img src="@/assets/instagram.png" alt="Instagram" class="social-icon">
        <img src="@/assets/twitter.png" alt="Twitter" class="social-icon">
      </div>
      <div class="footer-nav" v-motion-pop-visible>
        <a href="#" class="footer-link">Home</a>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Tickets</a>
        <a href="#" class="footer-link">FAQ</a>
      </div>
      <div class="sponsored-by" v-motion-pop-visible>
        <p>Sponsored by</p>
        <div class="sponsor-carousel-wrapper">
          <div class="sponsor-carousel" v-motion-pop-visible>
            <img src="@/assets/sponsors.png" alt="Sponsors" class="sponsor-logo">
          </div>
        </div>
      </div>
      <div class="footer-bottom" v-motion-pop-visible>
        <p>Copyright © 2024, Fantasy Festival Esbjerg. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Footer",
  });
  </script>
  
  <style scoped>
  .footer {
    color: white;
    padding: 100px 0;
    text-align: center;
  }
  
  .footer-title {
    color: white;
    font-size: 32px;
    margin-bottom: 3%;
  }
  
  .social-icons {
    margin-bottom: 6%;
  }
  
  .social-icon {
    margin: 0 50px;
    width: 60px;
    height: 60px;
  }
  
  .footer-nav {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 20px;
  }
  
  .footer-link {
    color: white;
    text-decoration: none;
    font-size: 22px;
  }
  
  .footer-link:hover {
    color: #ccc;
  }
  
  .sponsored-by {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  
  .sponsored-by p {
    margin-bottom: 20px;
    font-size: 18px;
  }
  
  .sponsor-carousel-wrapper {
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  
  .sponsor-carousel {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
  
  .sponsor-logo {
    max-width: 90%;
    height: auto;
  }
  
  .footer-bottom {
    margin-top: 20px;
  }
  
  .footer-bottom p {
    margin: 0;
    font-size: 16px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .footer-title {
      font-size: 28px;
      margin-bottom: 10%;
    }
  
    .social-icon {
      margin: 0 20px;
      width: 50px;
      height: 50px;
    }
  
    .footer-nav {
      flex-direction: column;
      gap: 20px;
    }
  
    .footer-link {
      font-size: 20px;
    }
  
    .sponsored-by {
      margin-top: 30px;
    }
  
    .sponsor-carousel-wrapper {
      padding: 10px 0;
    }
    
    .sponsor-logo {
      max-width: 80%;
    }
  }
  
  @media (max-width: 480px) {
    .footer-title {
      font-size: 24px;
      margin-bottom: 15%;
    }
  
    .social-icon {
      margin: 0 10px;
      width: 40px;
      height: 40px;
    }
  
    .footer-link {
      font-size: 18px;
    }
  
    .sponsor-logo {
      max-width: 70%;
    }
  }
  </style>
  
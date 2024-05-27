<template>
  <section class="faq-section text-center" v-motion-pop-visible>
    <h3 class="mb-4 pb-2 text-white fw-bold" style="font-size: 2.5rem;">FAQ</h3> 
    <p class="mb-5 text-white" style="font-size: 1.2rem;"> 
      Find the answers for the most frequently asked questions below
    </p>

    <div class="row justify-content-center" v-motion-pop-visible>
      <div class="col-md-6 col-lg-4 mb-4" v-for="(faq, index) in faqs" :key="index">
        <h6 class="mb-3 text-white animated" style="font-size: 1.5rem;"> 
          <i :class="faq.icon + ' text-white pe-2'"></i> {{ faq.question }}
        </h6>
        <p class="text-white animated" v-html="faq.answer" style="font-size: 1.2rem;"></p> 
      </div>
    </div>
  </section>


  <section class="submit-question-section mt-5" v-motion-pop-visible>
    <h4 class="text-white mb-4" style="font-size: 2rem; text-align: center;"> 
      Couldn’t find the answer? Write it below
    </h4>
    <div class="row justify-content-center" v-motion-pop-visible>
      <div class="col-md-8">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <textarea class="form-control question-box mb-3" placeholder="Write your question here..." style="font-size: 1.2rem;"></textarea> 
          <button class="btn-submit" @click="sendMessage">
            <img src="../assets/sendbutton.png" alt="Send" style="width: 300px; height: 50px;">
          </button>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center align-items-center" v-motion-pop-visible>
        <div class="image-container">
          <img :src="questionImage" alt="Question Image" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import eventImage from '@/assets/Portal.png'; 

export default {
  name: "SeventhScreen",
  data() {
    return {
      faqs: [
        {
          question: "How do I start my quest in Esbjerg?",
          answer: "To embark on your fantastical journey in Esbjerg, simply create an account and choose your character class. From there, you'll receive your first quest and be ready to explore the magical realm!",
          icon: "far fa-paper-plane"
        },
        {
          question: "What kinds of challenges will I face in Esbjerg?",
          answer: "In Esbjerg, you'll encounter a variety of challenges, from battling mythical creatures to solving intricate puzzles. Prepare to test your courage, wit, and strength as you navigate through this enchanting realm.",
          icon: "fas fa-pen-alt"
        },
        {
          question: "Are there different character classes to choose from?",
          answer: "Yes! Whether you fancy yourself a cunning rogue, a powerful wizard, or a noble knight, there's a character class suited to your strengths and preferences. Choose wisely, for your class will shape your journey in Esbjerg.",
          icon: "fas fa-user"
        },
        {
          question: "How can I customize my character in Esbjerg?",
          answer: "To customize your character, visit the character customization section in your dashboard. Here, you can personalize your appearance, abilities, and equipment to tailor your adventure to your liking.",
          icon: "fas fa-rocket"
        },
        {
          question: "Can I team up with other players in Esbjerg?",
          answer: "Absolutely! Teamwork is key to conquering the challenges of Esbjerg. Join forces with fellow adventurers, form alliances, and embark on epic quests together to achieve glory and riches.",
          icon: "fas fa-home"
        },
        {
          question: "Is there a free trial available to explore Esbjerg?",
          answer: "Of course! We offer a free trial period for new adventurers to experience the wonders of Esbjerg. Sign up today and begin your journey into the realm of fantasy!",
          icon: "fas fa-book-open"
        },
      ],
      questionImage: eventImage
    };
  },
  methods: {
    sendMessage() {
      // Add functionality for sending messages if needed
    }
  }
};
</script>

<style scoped>
.faq-section {
  padding: 2rem;
}

.submit-question-section {
  padding: 2rem;
}

.text-primary {
  color: #007bff;
}

.text-white {
  color: white !important;
}

.fw-bold {
  font-weight: bold;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mb-5 {
  margin-bottom: 3rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pe-2 {
  padding-right: 0.5rem;
}

.image-container {
  width: 300px;
  height: 300px;
  background-color: #f0f0f0; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

textarea.form-control {
  width: 100%;
  height: 250px;
  padding: 1rem;
  font-size: 1.2rem; 
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: black;
  resize: none;
}

textarea.form-control::placeholder {
  color: #aaa;
}

.btn-submit {
  border: none;
  background: none;
  cursor: pointer;
}

.animated {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

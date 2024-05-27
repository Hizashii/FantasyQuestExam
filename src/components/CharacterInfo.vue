<template>
  <div style="margin-top: 4%;">
    <h2 class="mb-4 text-center mt-4">Meet Our Characters</h2>
    <p class="text-center mb-4 mt-2" style="color: white;">Click on a character to view more information</p>
    <div class="container">
      <div class="row justify-content-centered">
        <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-evenly" v-for="(character, index) in characters" :key="index" v-motion-pop-visible>
          <div class="card card-custom" style="width: 200px; height: 290px; cursor: pointer;" @click="openModal(character)">
            <img :src="character.image" class="card-img-top" :alt="character.name" style="object-fit: cover; width: 100%; height: 100%;">
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade show" id="characterModal" tabindex="-1" role="dialog" aria-labelledby="characterModalLabel" aria-hidden="true" v-if="selectedCharacter" style="display: block;">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="characterModalLabel">{{ selectedCharacter.name }}</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ selectedCharacter.description }}</p>
            <p>{{ selectedCharacter.moreInfo }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref } from "vue";
import guideAvatar from '../assets/guideavatar.png';
import crocAvatar from '../assets/crocavatar.png';
import harrypotter from '../assets/harrypotter.png';
import ariel from '../assets/Ariel.png';
import voldemort from '../assets/Voldemort.png';
import menOfTheStrange from '../assets/MenOfTheStrange.png';

export default defineComponent({
  name: "CharacterInfo",
  setup() {
    const characters = ref([
      
{
name: "Arkivaren",
image: guideAvatar,
description: "Arkivaren, the Eternal Archivist",
moreInfo: "Arkivaren is not just a guide; he is the embodiment of timeless wisdom and knowledge. As the Eternal Archivist, he transcends the boundaries of time, existing as a guardian of the collective memories and histories of all worlds. His age surpasses the measure of time itself, making him an enigmatic figure shrouded in mystery and reverence. Arkivaren's presence exudes a serene aura of ancient wisdom, and his eyes hold the depth of countless ages. He serves as a beacon of guidance for those who seek to unravel the secrets of existence and uncover the threads that weave the tapestry of reality."
},
     
{
name: "Gnist",
image: crocAvatar,
description: "Gnist, the Crocodilian Ember",
moreInfo: "Gnist is a creature of primal power and ancient allure. With scales like burnished embers and eyes that gleam with fiery intensity, Gnist is a formidable presence in any realm. Born of the primordial fires that sparked the creation of worlds, Gnist embodies the raw essence of elemental energy. Despite the intimidating exterior, there lies a cunning intellect beneath the surface, honed by survival instincts as old as time itself. Gnist moves with a fluid grace, blending seamlessly with the shadows of marshes and rivers, ever watchful and ever ready to defend its territory. Beware the allure of Gnist's fiery gaze, for those who dare to challenge this crocodilian guardian may find themselves consumed by the flames of its wrath."
},
{
  "name": "Gygaz",
  "image": harrypotter,
  "description": "Gygaz, the Young Sorcerer",
  "moreInfo": "Gygaz is the protagonist of our story, a youthful sorcerer with a penchant for mischief and a heart full of curiosity. With his untidy black hair and round glasses, Gygaz possesses a striking resemblance to a certain famous wizard. However, his adventures are entirely his own, as he navigates the challenges of magical education and the trials of youth. Despite his tender age, Gygaz displays a remarkable talent for spellcasting and potion-making, earning him the admiration of his peers and the attention of his teachers. His journey is filled with excitement, danger, and moments of triumph, as he learns valuable lessons about friendship, courage, and the true nature of magic. Gygaz's story is one of growth, discovery, and the boundless possibilities that lie within the world of wizardry."
}
,
      
{
"name": "Havfruedronning",
"image": ariel,
"description": "Havfruedronning, the Mermaid Queen",
"moreInfo": "Havfruedronning is the majestic ruler of the ocean depths, a mermaid of unparalleled beauty and grace. With shimmering scales and flowing locks that cascade like waves around her, she embodies the ethereal allure of the sea. As the sovereign of her underwater kingdom, Havfruedronning commands the respect and admiration of all who dwell beneath the waves. Her voice is as melodious as the songs of the ocean, capable of enchanting even the most hardened hearts. Yet, beneath her regal exterior lies a compassionate soul, ever vigilant in her duty to protect her realm and its inhabitants. Havfruedronning's presence is a beacon of hope and tranquility in the vast expanse of the ocean, a symbol of the enduring beauty and power of the natural world."
} ,
     
{
"name": "Malice",
"image": voldemort,
"description": "Malice, the Enigmatic Mistress of Darkness",
"moreInfo": "Malice is the personification of ultimate evil, a formidable adversary whose malevolence knows no bounds. With a visage veiled in shadows and eyes aglow with sinister intent, Malice commands fear and respect in equal measure. Cloaked in robes the color of midnight and adorned with jewels that gleam with an otherworldly light, Malice exudes an aura of dark elegance and mystique. Though her true form remains shrouded in mystery, whispers of her presence send shivers down the spines of even the bravest souls. Despite her penchant for darkness, Malice harbors a fondness for the color purple, a symbol of her regal nature and her insatiable thirst for power. Beware those who cross paths with Malice, for her beauty is but a facade that masks the true depths of her malevolence."
},
{
"name": "VogterkZmper",
"image": menOfTheStrange,
"description": "Men of the VogterkZmper, Guardians of the City",
"moreInfo": "The Men of the VogterkZmper are the stalwart protectors of the city, guardians who stand as bulwarks against the encroaching forces of chaos and darkness. Four in number, each with their own unique skills and abilities, they form an unbreakable bond forged in the crucible of duty and sacrifice. Clad in armor that gleams with the light of resolve and armed with weapons honed to perfection, they patrol the streets with unwavering vigilance, ever watchful for threats to the safety and prosperity of the city. Though their origins are shrouded in mystery, their dedication to their sworn duty is unwavering, and their loyalty to each other is unbreakable. The Men of the VogterkZmper are not just guardians; they are symbols of hope and strength in a world besieged by darkness, standing as beacons of light in the darkest of times."
}
    ]);

    const selectedCharacter = ref(null);

    const openModal = (character) => {
      selectedCharacter.value = character;
      new bootstrap.Modal(document.getElementById('characterModal')).show();
    };

    const closeModal = () => {
      selectedCharacter.value = null;
      const modalElement = document.getElementById('characterModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    };

    return {
      characters,
      selectedCharacter,
      openModal,
      closeModal
    };
  }
});
</script>

<style scoped>
.container {
  width: 100%;
}

h2 {
  color: white;
}

p {
  color: black;
}

.card-custom {
  background-color: #ffffff;
  box-shadow: 0px 0px 20px #ffffff; /* White glow effect */
  transition: box-shadow 0.3s ease;
}

.card-custom:hover {
  box-shadow: 0px 0px 40px #ffffff; /* Increased glow on hover */
  cursor: pointer;
}

.modal-header, .modal-body, .modal-footer {
  color: black; /* Black font color for readability */
}

.modal.show .modal-content {
  animation: flipInX 0.5s ease;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotateY(90deg);
  }
  30% {
    transform: perspective(400px) rotateY(-15deg);
  }
  40% {
    transform: perspective(400px) rotateY(10deg);
  }
  50% {
    transform: perspective(400px) rotateY(-5deg);
  }
  60% {
    transform: perspective(400px) rotateY(5deg);
  }
  70% {
    transform: perspective(400px) rotateY(-2deg);
  }
  to {
    transform: perspective(400px);
  }
}
</style>

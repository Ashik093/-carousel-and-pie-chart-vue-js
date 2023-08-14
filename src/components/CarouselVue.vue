<script setup>
import { onMounted, onBeforeUnmount,ref } from "vue"

const images = ref([
  "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://thumbs.dreamstime.com/b/concept-risk-danger-business-man-steping-blind-young-businessman-blindfold-walking-carefully-cityscape-149961142.jpg",
  "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
])

const currentIndex = ref(0)
let intervalId

const nextSlide = () => {
  if(currentIndex.value ===images.value.length-1){
    currentIndex.value = 0
  }else{
    currentIndex.value = currentIndex.value + 1
  }
  
}

const prevSlide = () => {
  if(currentIndex.value ===0){
    currentIndex.value = images.value.length-1
  }else{
    currentIndex.value = currentIndex.value - 1
  }
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-container">
      <div
        class="carousel-slide"
        
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-image"
        >
          <img :src="images[currentIndex]" alt="Carousel Image" />
        </div>
      </div>
    </div>
    <div class="bullet-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        class="bullet"
      ></span>
    </div>
    <button @click="prevSlide" class="prev-button">&#8249;</button>
    <button @click="nextSlide" class="next-button">&#8250;</button>
  </div>
</template>



<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  display: flex;
  flex-direction: row;
}

.carousel-image {
  flex: 0 0 100%;
}

img {
  width: 100%;
  height: 500px;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 80px;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
.bullet-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.bullet {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.bullet.active {
  background-color: black;
}
</style>

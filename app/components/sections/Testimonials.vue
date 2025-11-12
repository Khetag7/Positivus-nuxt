<script setup>
import ActiveVector from '@/assets/images/Icons/TestimonialsActiveVector.png'
import Vector from '@/assets/images/Icons/TestimonialsVector.png'


const currentSlide = ref(1)
const isMobile = ref(false)

const nextSlide = () => {
  currentSlide.value = currentSlide.value === 2 ? 0 : currentSlide.value + 1
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 840
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const sliderTransform = computed(() => {
  if (isMobile.value) {
    return `translateX(-${currentSlide.value * 426}px)`
  } else {
    return `translateX(-${currentSlide.value * 626}px)`
  }
})

</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div class="testimonials__titles">
        <h2 class="testimonials__titles-title">Testimonials</h2>
        <p class="testimonials__titles-text">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      
      <div class="testimonials__slider">
        <div class="testimonials__slider-cards" :style="{ transform: sliderTransform }">
          <div 
          class="testimonials__slider-cards-card"
          v-for="(_, index) in 3"
          :key="index"
          >
          <img src="@/assets/images/Pictures/TestimonialsBubble.png" alt="" class="testimonials__slider-cards-card-img">
          <p class="testimonials__slider-cards-card-text">
            <span>John Smith</span> <br>
            Marketing Director at XYZ Corp
          </p>
        </div>
      </div>
      <div class="testimonials__slider-nav">
        <img src="@/assets/images/Icons/Arrowleft.png" alt="" @click="prevSlide" 
        style="cursor: pointer;" class="testimonials__slider-nav-arrow">
        
        <div class="testimonials__slider-nav-stars">
          <img 
          v-for="(_, index) in 3" 
          :key="index"
          :src="index === currentSlide ? ActiveVector : Vector" 
          alt=""
          :style="{ 
            cursor: 'pointer'
          }"
          @click="goToSlide(index)"
          >
        </div>
        
        <img src="@/assets/images/Icons/Arrowright.png" alt="" @click="nextSlide" 
        style="cursor: pointer;" class="testimonials__slider-nav-arrow">
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@use '@/components/sections/Testimonials.scss';
</style>

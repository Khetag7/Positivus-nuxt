<script setup>
import { ref } from 'vue'

const selectedOption = ref('sayHi')
const form = ref({
  name: '',
  email: '',
  message: ''
})

// const handleSubmit = () => {
//   console.log('Form submitted:', form.value)
//   // Здесь можно добавить логику отправки формы
// }
</script>

<template>
  <section class="contactUs">
    <div class="container">
      <div class="contactUs__titles">
        <h2 class="contactUs__titles-title">Contact Us</h2>
        <p class="contactUs__titles-text">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      
      <div class="contactUs__block">
        <form class="contactUs__form" @submit.prevent="handleSubmit">
          
          <div class="contactUs__form-radioBtns">
            <label class="radio-btn">
              <input type="radio" value="sayHi" v-model="selectedOption"  
              name="contactType" id="sayHi">
                
              <span class="radio-custom">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="black" class="radio-outer"/>
                  <circle cx="15" cy="15" r="8" fill="#B9FF66" class="radio-inner"/>
                </svg>
              </span>
              <p>Say Hi</p>
            </label>
            <label class="radio-btn">
              <input type="radio" value="getQuote" v-model="selectedOption" 
              name="contactType" id="getQuote">
                
              <span class="radio-custom">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="black" class="radio-outer"/>
                  <circle cx="15" cy="15" r="8" fill="#B9FF66" class="radio-inner"/>
                </svg>
              </span>
              <p>Get a Quote</p>
            </label>
          </div>
          
          <div class="contactUs__form-labels">
            <div>
              <label for="name">Name</label>
              <input 
                id="name"
                type="text" 
                v-model="form.name"
                placeholder="Name"
                name="name"
                autocomplete="name"
              >
            </div>
            <div>
              <label for="email">Email*</label>
              <input 
                id="email"
                name="email"
                type="email" 
                v-model="form.email"
                placeholder="Email"
                required
                autocomplete="email"
              >
            </div>
            <div>
              <label for="message">Message*</label>
              <textarea 
                id="message"
                name="message"
                v-model="form.message"
                placeholder="Message"
                required
                autocomplete="off"
              ></textarea>
            </div>
          </div>
          
          <button type="submit" class="contactUs__btn">Send Message</button>
        </form>
        <img src="@/assets/images/Pictures/IllustrationContactUs.png" alt="Picture" class="contactUs__img">
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use '@/components/sections/ContactUs.scss';
</style>

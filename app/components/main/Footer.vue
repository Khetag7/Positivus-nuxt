<script setup>
// Импортируем валидацию
import { validateEmail } from '~/utils/validators'

const email = ref('')
const isLoading = ref(false)
const isSubscribed = ref(false)
const errorMessage = ref('')
const isTouched = ref(false)

// Обработчик изменения email
const handleEmailChange = (value) => {
  email.value = value
  isTouched.value = true
  errorMessage.value = validateEmail(value)
}

// При уходе с поля
const handleEmailBlur = () => {
  isTouched.value = true
  errorMessage.value = validateEmail(email.value)
}

// Функция подписки
const subscribeToNews = async () => {
  const validationError = validateEmail(email.value)
  
  if (validationError) {
    errorMessage.value = validationError
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    isSubscribed.value = true
    email.value = ''
    
    setTimeout(() => {
      isSubscribed.value = false
    }, 5000)
    
  } catch (error) {
    errorMessage.value = 'Subscription failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Очистка плейсхолдера
const clearPlaceholder = (event) => {
  if (event.target.value === '') {
    event.target.placeholder = ''
  }
}

const restorePlaceholder = (event) => {
  if (event.target.value === '') {
    event.target.placeholder = 'Email'
  }
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer__block">
        <div class="footer__block-top">
          <div class="footer__block-top-titles">
            <nuxt-link to="/"><img src="@/assets/images/Logoes/LogoWhite.png" alt="" class="footer__logo"></nuxt-link>
            
            <nav class="footer__nav">
              <ul class="footer__list">
                <li>
                  <nuxt-link to="/about" class="footer__list-text">About us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/services" class="footer__list-text">Services</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/cases" class="footer__list-text">Use Cases</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pricing" class="footer__list-text">Pricing</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/blog" class="footer__list-text">Blog</nuxt-link>
                </li>
              </ul>
            </nav>
            
            <div class="footer__social-icons">
              <nuxt-link to="/">
                <img src="@/assets/images/Icons/SocialIconFooter.png" alt="">
              </nuxt-link>
              <nuxt-link to="/">
                <img src="@/assets/images/Icons/SocialIconFooter2.png" alt="">
              </nuxt-link>
              <nuxt-link to="/">
                <img src="@/assets/images/Icons/SocialIconFooter3.png" alt="">
              </nuxt-link>
            </div>
            
          </div>
          
          <div class="footer__block-top-info">
            <div class="footer__block-top-info-left">
              <h4 class="footer__block-top-info-title">
                Contact us:
              </h4>
              <div class="footer__block-top-info-left-infoes">
                <p>Email: <a href="mailto:info@positivus.com" title="Write to us!">info@positivus.com</a></p>
                <p>Phone: <a href="tel:+555-567-8901" title="Call us!">555-567-8901</a></p>
                <p>
                  Address: 
                  <a href="https://maps.app.goo.gl/v93ueieGWUowhd847" title="Find us!" target="_blank">
                    1234 Main St <br>
                    Moonstone City, Stardust State 12345
                  </a>
                </p>
              </div>
            </div>
            <div class="footer__block-top-info-right">
              <div class="subscribe-form">
                <div class="input-wrapper">
                  <div class="subscribe-input-group">
                    <input 
                      v-model="email"
                      @input="(e) => handleEmailChange(e.target.value)"
                      @blur="handleEmailBlur"
                      @focus="clearPlaceholder"
                      type="email" 
                      placeholder="Email"
                      :disabled="isLoading"
                      class="email-input"
                      id="footer-email"
                      name="email"
                      autocomplete="email"
                    />
                    
                    <button 
                      @click="subscribeToNews"
                      :disabled="isLoading || !!errorMessage || !email"
                      class="subscribe-btn"
                    >
                      <span v-if="isLoading">Subscribing...</span>
                      <span v-else-if="isSubscribed">Subscribed!</span>
                      <span v-else>Subscribe to news</span>
                    </button>
                  </div>
                  
                  <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                  </div>
                </div>
                
                <div v-if="isSubscribed" class="success-message">
                  Thank you for subscribing! You'll hear from us soon.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__block-bottom">
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <nuxt-link to="/" class="footer__block-bottom-link">Privacy Policy</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/components/main/Footer.scss';
</style>

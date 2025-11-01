<script setup>

const isMenuOpen = ref(false)

const handleClick = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClose = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header>
    <div class="container g-flex">
      
      <nuxt-link to="/" @click="handleClose">
        <img src="@/assets/images/Logoes/Logo.png" alt="header-logo" class="header__logo">
      </nuxt-link>
      
      <!-- Десктопная навигация -->
      <nav class="header__nav header__nav--desktop">
        <ul class="header__list">
          <li>
            <nuxt-link to="/" class="header__list-text">About us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text">Services</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text">Use Cases</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text">Pricing</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text">Blog</nuxt-link>
          </li>
          <nuxt-link to="/" class="header__btn">
            <p class="header__list-text">Request a quote</p>
          </nuxt-link>  
        </ul>
      </nav>
      
      <!-- Мобильная навигация -->
      <nav class="header__nav header__nav--mobile" :class="{ 'header__nav--active': isMenuOpen }" @click="handleClose">
        <ul class="header__list">
          <li>
            <nuxt-link to="/" class="header__list-text" @click="handleClose">About us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text" @click="handleClose">Services</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text" @click="handleClose">Use Cases</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text" @click="handleClose">Pricing</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="header__list-text" @click="handleClose">Blog</nuxt-link>
          </li>
          <nuxt-link to="/" class="header__btn" @click="handleClose">
            <p class="header__list-text">Request a quote</p>
          </nuxt-link>  
        </ul>
      </nav>
      
      <div class="header__burger" @click="handleClick" :class="{ 'header__burger-active': isMenuOpen }">
        <div></div>
        <div></div>
        <div></div>
      </div>
      
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/components/main/Header.scss';
</style>

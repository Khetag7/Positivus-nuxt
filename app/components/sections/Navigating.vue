<script setup>

</script>

<template>
  <section class="navigating">
    <div class="container navigating-flex">
      <div class="navigating__left">
        <h1 class="navigating__left-title">
          Navigating the digital landscape for success
        </h1>
        <p class="navigating__left-text">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <nuxt-link to="/" class="navigating__left-btn">
          Book a consultation
        </nuxt-link>
      </div>
      <div class="navigating__right">
        <img src="@/assets/images/Pictures/NavigatingPicture.png" alt="NavigatingPicture" class="navigating__img">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/components/sections/Navigating.scss';
</style>

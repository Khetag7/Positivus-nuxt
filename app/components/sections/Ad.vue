<script setup>

</script>

<template>
    <section class="ad">
      <div class="container">
        <div class="ad__block g-flex">
          <div class="ad__right">
            <h3 class="ad__right-title">
              Let’s make things happen
            </h3>
            <p class="ad__right-text">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <nuxt-link to="/" class="ad__right-btn">
              Get your free proposal
            </nuxt-link>
          </div>
            <img src="@/assets/images/Pictures/AdPicture.png" alt="AdPicture" class="ad__img">
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/components/sections/Ad.scss';
</style>

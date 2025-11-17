<script setup>

</script>

<template>
    <section class="about">
      <div class="container">
        <h1 class="about__title">About Us</h1>
        <p class="about__text">Hello this About Us page!</p>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.about
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.about__title
{
  @include g-text-one;
  font-size: 40px;
}
.about__text
{
  @include g-text-two;
  font-size: 16px;
}
</style>

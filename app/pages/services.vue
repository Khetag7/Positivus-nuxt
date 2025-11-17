<script setup>

</script>

<template>
    <section class="services">
      <div class="container">
        <h1 class="services__title">Services</h1>
        <p class="services__text">Hello this Services page!</p>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.services
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.services__title
{
  @include g-text-one;
  font-size: 40px;
}
.services__text
{
  @include g-text-two;
  font-size: 16px;
}
</style>

<script setup>

</script>

<template>
    <section class="pricing">
      <div class="container">
        <h1 class="pricing__title">Pricing</h1>
        <p class="pricing__text">Hello this Pricing page!</p>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.pricing
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.pricing__title
{
  @include g-text-one;
  font-size: 40px;
}
.pricing__text
{
  @include g-text-two;
  font-size: 16px;
}
</style>

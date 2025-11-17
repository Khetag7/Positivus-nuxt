<script setup>

</script>

<template>
    <section class="cases">
      <div class="container">
        <h1 class="cases__title">Cases</h1>
        <p class="cases__text">Hello this Cases page!</p>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.cases
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.cases__title
{
  @include g-text-one;
  font-size: 40px;
}
.cases__text
{
  @include g-text-two;
  font-size: 16px;
}
</style>

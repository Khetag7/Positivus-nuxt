<script setup>

</script>

<template>
    <section class="Blog">
      <div class="container">
        <h1 class="Blog__title">Blog</h1>
        <p class="Blog__text">Hello this Blog page!</p>
      </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.Blog
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.Blog__title
{
  @include g-text-one;
  font-size: 40px;
}
.Blog__text
{
  @include g-text-two;
  font-size: 16px;
}
</style>

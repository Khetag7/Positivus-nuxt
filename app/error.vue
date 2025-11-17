<script setup>

</script>

<template>
  <mainHeader />
  
  <section class="error">
    <div class="container error-container">
      <div class="error__wrapp">
        <img src="@/assets/images/Icons/ErrorIcon.png" alt="ErrorImg" class="error__img">
        
        <div class="error__block">
          <h1>404 Page Not Found</h1>
          <p>Sorry, this page does not exist.</p>
        </div>
        
        <nuxt-link to="/" class="error-btn">Go back</nuxt-link>
      </div>
    </div>
  </section>
  
  <mainFooter />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.error
{
  margin-top: 100px;
  margin-bottom: 100px;
}
.error__block
{
  margin-bottom: 50px;
  
  & h1
  {
    @include g-text-one;
    font-size: 40px;
  }
  
}
.error-btn
{
  display: block;
  @include g-btn;
  @include g-text-two;
  background: #191A23;
  border: 1px solid #191A23;
  text-align: center;
  color: #fff;
  transition: all ease 0.3s;
  
  &:hover
  {
    border: 1px solid #000000;
    background-color: #FFF;
    color: #000;
  }
}

.error__wrapp
{
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.error-container
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error__img
{
  margin-bottom: 50px;
}
</style>

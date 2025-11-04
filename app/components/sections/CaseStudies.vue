<script setup>

const studiesData = ref([
  {
    id: 0,
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    id: 1,
    text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    id: 2,
    text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
])

</script>

<template>
  <section class="studies">
    <div class="container">
      <div class="studies__titles">
        <h2 class="studies__titles-title">Case Studies</h2>
        <p class="studies__titles-text">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>
      
      <div class="studies__blocks">
        <div v-for="content in studiesData" :key="content.id" class="studies__block">
          <p class="studies__block-text">
            {{ content.text }}
          </p>
          <nuxt-link to="/" class="studies__block-btn">
              <p class="studies__block-btn-text">
                Learn more
              </p>
              <img src="@/assets/images/Icons/ArrowIcon.png" alt="" class="studies__block-btn-img">
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/components/sections/CaseStudies.scss';
</style>

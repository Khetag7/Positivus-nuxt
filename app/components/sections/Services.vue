<script setup>
import ServiceIlustration from "@/assets/images/Pictures/ServiceIlustration.png";
import ServiceIlustration2 from "@/assets/images/Pictures/ServiceIlustration2.png";
import ServiceIlustration3 from "@/assets/images/Pictures/ServiceIlustration3.png";
import ServiceIlustration4 from "@/assets/images/Pictures/ServiceIlustration4.png";
import ServiceIlustration5 from "@/assets/images/Pictures/ServiceIlustration5.png";
import ServiceIlustration6 from "@/assets/images/Pictures/ServiceIlustration6.png";

import ArrowBackground2 from "@/assets/images/Icons/ArrowBackground2.png";
import ArrowBackground3 from "@/assets/images/Icons/ArrowBackground3.png";



const dataContents = ref([
{
  id: 1,
  img: ServiceIlustration,
  title: 'Search engine',
  titleBottom: 'optimization',
  text: 'Learn more',
  btnIcon: ArrowBackground3
},
{
  id: 2,
  img: ServiceIlustration2,
  title: 'Pay-per-click',
  titleBottom: 'advertising',
  text: 'Learn more',
  btnIcon: ArrowBackground3
},
{
  id: 3,
  img: ServiceIlustration3,
  title: 'Social Media',
  titleBottom: 'Marketing',
  text: 'Learn more',
  btnIcon: ArrowBackground2
},
{
  id: 4,
  img: ServiceIlustration4,
  title: 'Email',
  titleBottom: 'Marketing',
  text: 'Learn more',
  btnIcon: ArrowBackground3
},
{
  id: 5,
  img: ServiceIlustration5,
  title: 'Content',
  titleBottom: 'Creation',
  text: 'Learn more',
  btnIcon: ArrowBackground3
},
{
  id: 6,
  img: ServiceIlustration6,
  title: 'Analytics and',
  titleBottom: 'Tracking',
  text: 'Learn more',
  btnIcon: ArrowBackground2
},
])
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services__titles">
        <h2 class="services__titles-title">Services</h2>
        <p class="services__titles-text">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      
      <div class="services__blocks">
        <nuxt-link to="/" class="service__block" v-for="content in dataContents" :key="content.id">
          
          <div class="service__block-texts">
            <div>
              <h3 class="service__block-texts-title">
                {{ content.title }}
              </h3>
              <p class="service__block-texts-title-p">{{ content.titleBottom }}</p>
            </div>
            <div to="/" class="service__block-texts-btn">
              <img :src="content.btnIcon" alt="" class="service__block-texts-img">
              <p class="service__block-texts-btn-text">
                {{ content.text }}
              </p>
            </div>
          </div>
          
          <div class="services__block-illustration">
            <img :src="content.img" alt="" class="services__block-illustration-img">
          </div>
          
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/components/sections/Services.scss';

</style>

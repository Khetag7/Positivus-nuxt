<script setup>
import PlusIcon from '@/assets/images/Icons/PlusIcon.png'
import MinusIcon from '@/assets/images/Icons/MinusIcon.png'


const activeIndex = ref(0)

const ToggleAccordion = (index) => 
{
  if(activeIndex.value === index )
  {
    activeIndex.value = null
  } else 
  {
    activeIndex.value = index
  }
}

const accordionItems = ref([
{
  number: '01',
  title: 'Consultation',
  content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
},
{
  number: '02',
  title: 'Research and Strategy Development',
  content: 'Research and Strategy Development'
},
{
  number: '03',
  title: 'Implementation',
  content: 'Implementation'
},
{
  number: '04',
  title: 'Monitoring and Optimization',
  content: 'Monitoring and Optimization'
},
{
  number: '05',
  title: 'Reporting and Communication',
  content: 'Reporting and Communication'
},
{
  number: '06',
  title: 'Continual Improvement',
  content: 'Continual Improvement'
},
])
</script>

<template>
  <section class="ourWorking">
    <div class="container">
      
      <div class="ourWorking__titles">
        <h2 class="ourWorking__titles-title">Our Working Process </h2>
        <p class="ourWorking__titles-text">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      
      <div class="ourWorking__lists">
        <div 
        v-for="(item, index) in accordionItems" 
        :key="index" 
        :class="['ourWorking__block', { 'ourWorking__block-active' : activeIndex === index}]"
        @click="ToggleAccordion(index)"
        >
        <div class="ourWorking__block-top">
          <label for="" class="ourWorking__block-top-label">
            <h3 class="ourWorking__block-top-title">
              {{ item.number }}
            </h3>
            <p class="ourWorking__block-top-text">{{ item.title }}</p>
          </label>
          <div class="ourWorking__icon">
            <img :src="activeIndex === index ? MinusIcon : PlusIcon" :alt="activeIndex === index ? 'MinusIcon' : 'PlusIcon'">
          </div>
        </div>
        <div class="ourWorking__line"></div>
        <p class="ourWorking__block-paragraph">
          {{ item.content }}
        </p>
    </div>
    
    
  </div>
</div>
</section>
</template>

<style scoped lang="scss">
@use '@/components/sections/OurWorking.scss';
</style>

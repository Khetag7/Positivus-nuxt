<script setup>
import PictureTeam from '@/assets/images/Pictures/PictureTeam.png'
import PictureTeam2 from '@/assets/images/Pictures/PictureTeam2.png'
import PictureTeam3 from '@/assets/images/Pictures/PictureTeam3.png'
import PictureTeam4 from '@/assets/images/Pictures/PictureTeam4.png'
import PictureTeam5 from '@/assets/images/Pictures/PictureTeam5.png'
import PictureTeam6 from '@/assets/images/Pictures/PictureTeam6.png'


const gridContent = ref([
{
  picture: PictureTeam,
  name: 'John Smith',
  info: 'CEO and Founder',
  text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
},
{
  picture: PictureTeam2,
  name: 'Jane Doe',
  info: 'Director of Operations',
  text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
},
{
  picture: PictureTeam3,
  name: 'Michael Brown',
  info: 'Senior SEO Specialist',
  text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
},
{
  picture: PictureTeam4,
  name: 'Emily Johnson',
  info: 'PPC Manager',
  text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
},
{
  picture: PictureTeam5,
  name: 'Brian Williams',
  info: 'Social Media Specialist',
  text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
},
{
  picture: PictureTeam6,
  name: 'Sarah Kim',
  info: 'Content Creator',
  text: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
}
])
</script>

<template>
  <section class="team">
    <div class="container team-flex">
      <div class="team__titles">
        <h2 class="team__titles-title">Team</h2>
        <p class="team__titles-text">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      
      <div class="team__grid">
        <nuxt-link to="/" v-for="content in gridContent" :key="content.index" class="team__grid-block">
          <div class="team__grid-block-top">
            <div class="team__grid-block-top-texts">
              <img :src="content.picture" alt="Picture">
              <div class="team__grid-block-top-name">
                <h4 class="team__grid-block-top-name-h4">{{ content.name }}</h4>
                <p class="team__grid-block-top-name-p">{{ content.info }}</p>
              </div>
            </div>
            <img src="@/assets/images/Icons/SocialIconTeam.png" alt="Icon" class="socialicon__img">
          </div>
          
          <p class="team__grid-block-text">{{ content.text }}</p>
        </nuxt-link>
      </div>
      
      <nuxt-link to="/" class="team__btn">See all team</nuxt-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/components/sections/Team.scss';
</style>

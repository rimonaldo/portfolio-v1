<template>
  <section class="body">
    <section class="main-layout">
      <div class="full">
      </div>
      <app-hero />
      <div class="tech app-page">
        <header>Skills</header>
        <tech-icons :iconsToShow="['vue','vuex','react','redux','github','sass','node','mongodb',]" />
      </div>
      <gallery-list />
    </section>
  </section>
  <app-footer />
</template>
  
<script>
import appHeader from '../cmps/header.vue'
import appFooter from '../cmps/app-footer.vue'
import itemList from '../cmps/item-list.vue'
import appHero from '../cmps/hero.vue'
import galleryList from '../cmps/gallery-list.vue'
import techIcons from '../cmps/icons.vue'
export default {
  components: {
    appHeader,
    itemList,
    appFooter,
    appHero,
    galleryList,
    techIcons,
  },
  data() {
    return {

    }
  },
  methods: {
    
  },
  computed: {
    items() {
      return this.$store.getters.items
    }
  },
  created() {
  }

}
</script>
  
  
  
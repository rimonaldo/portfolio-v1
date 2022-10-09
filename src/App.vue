<template>
  <app-header @scroll="scrollToElement"/>
  <router-view />
</template>

<script>
import appHeader from '@/cmps/header.vue'
import appFooter from './cmps/app-footer.vue'
import itemList from './cmps/item-list.vue'
import appHero from './cmps/hero.vue'
import galleryList from './cmps/gallery-list.vue'
export default {
  components: {
    appHeader,
    itemList,
    appFooter,
    appHero,
    galleryList,
  },
  data() {
    return {
      
    }
  },
  methods: {
    scrollToElement(element) {
      const el = document.querySelector(element);

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
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



<template>
  <app-header />
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
  methods: {},
  computed: {
    items() {
      return this.$store.getters.items
    }
  },
  created() {
  }

}
</script>



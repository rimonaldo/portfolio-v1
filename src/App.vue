<template>
  <section class="main-layout">
    <div class="full">
      <app-header />
    </div>
    <app-hero />
    <gallery-list />
    <app-action />  
    <app-footer/>
  </section>
</template>

<script>
import appHeader from '@/cmps/header.vue'
import appFooter from './cmps/app-footer.vue'
import itemList from './cmps/item-list.vue'
import appHero from './cmps/hero.vue'
import galleryList from './cmps/gallery-list.vue'
import appAction from './cmps/app-action.vue'
export default {
  components: {
    appHeader,
    itemList,
    appFooter,
    appHero,
    galleryList,
    appAction,
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



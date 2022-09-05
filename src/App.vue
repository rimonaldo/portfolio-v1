<template>
  <section class="main-layout">
    <div class="full">
      <app-header />
    </div>
    <home-page />
    <!-- <item-list /> -->
    <gallery-list />
  </section>
</template>

<script>
import appHeader from '@/cmps/header.vue'
import appFooter from './cmps/app-footer.vue'
import itemList from './cmps/item-list.vue'
import homePage from './views/home-page.vue'
import galleryList from './cmps/gallery-list.vue'
export default {
  components: {
    appHeader,
    itemList,
    appFooter,
    homePage,
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



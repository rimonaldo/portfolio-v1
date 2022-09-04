<template>
  <section class="main-layout">
    <div class="full">
      <app-header />

    </div>
    <item-list />
  </section>
</template>

<script>
import appHeader from '@/cmps/app-header.vue'
import appFooter from './cmps/app-footer.vue'
import itemList from './cmps/item-list.vue'
export default {
  components: {
    appHeader,
    itemList,
    appFooter,
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



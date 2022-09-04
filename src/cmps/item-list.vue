<template>
  <section v-if="items" class="item-list">
    <item-preview  v-for="item in items" :key="item._id" :item="item"></item-preview>
  </section>
</template>
 <script>
 import itemPreview from './item-preview.vue';
export default {
  name: 'ProjectApp',
  props: {
  },
  components: {
    itemPreview,

  },
  data() {
    return {

    };
  },
  created() { 
    console.log('gitems', this.items);
  },
  methods: {},
  computed: {
     items() {
      return this.$store.getters.items
    }
  },
  unmounted() { },
};
</script>
 <style>

  .item-list{
    border: 1px black solid;
  }

 </style>
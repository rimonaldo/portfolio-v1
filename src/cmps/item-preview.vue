<template>
  <section>
    <div class="item-preview" @click="$router.push('/item/' + item._id)">
      <div class="item-item">{{ item.title }}</div>
      <div class="item-item">{{ item.importance }}</div>
      <div class="item-item">{{ item.createdAt }}</div>
      <div class="item-item">{{ item.doneAt }}</div>
      <div class="item-item">{{ item.status }}</div>
    </div>
    <router-view></router-view>
  </section>
</template>
 <script>
export default {
  name: 'ProjectApp',
  props: {
    item: Object
  },
  components: {},
  data() {
    return {};
  },
  created() { },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
 <style>

 .item-preview{
  display: flex;
  border: 1px black solid;
  justify-content: space-between;
 }
 </style>
 

<template>
  <div class="item" :style="{'backgroundImage': `url(${project})`}"> </div>
</template>
<script>
export default {
  name: 'ProjectApp',
  props: { project: String },
  components: {},
  data() {
    return {
    };
  },
  created() {
   },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
<style>

</style>
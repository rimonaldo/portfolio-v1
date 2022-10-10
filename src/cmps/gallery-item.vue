<template>
  <a target="_blank" :href="link" class="mockup-img" :style="{'backgroundImage': `url(${project})`}" @click="log(link)"> </a>
</template>
<script>
export default {
  name: 'ProjectApp',
  props: {
    project: String,
    link: String
  },
  components: {},
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    log(prop) {
      console.log(prop);
    }
  },
  computed: {},
  unmounted() { },
};
</script>
<style>

</style>
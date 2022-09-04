<template>
  <section class="main-header">
    <div class="content">
      <div class="logo">logo</div>

      <ul :class='{show: isMenuOpen}'>
        <li>Home</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

      <div class="burger fa-solid" @click="toggleMenu"></div>
    </div>
  </section>
</template>
  <script>
  export default {
    name: 'ProjectApp',
    components: {},
    data() {
      return {
        isMenuOpen:false
      };
    },
    created() { },
    methods: {
      toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen
      }
    },
    computed: {},
    unmounted() { },
  };
  
  </script>
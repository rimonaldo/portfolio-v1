<template>
  <section class="main-header">
    <div class="content">
      <!-- <div class="logo">logo</div> -->
      <div @click="toggleMode" :class="[mode === 'dark' ? 'dark':'', 'toggl-mode']">
        <div class="toggl"></div>
        <div class="sun mode"><img src="https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_sun_sunny_day-512.png" alt=""></div>
        <div class="moon mode"><img src="https://www.freeiconspng.com/uploads/crescent-moon-png-21.png" alt=""></div>
      </div>

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
      isMenuOpen: false,
      mode: 'dark'
    };
  },
  created() { },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleMode() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
      document.querySelector('body').classList = this.mode
      console.log(this.mode);
    }
  },
  computed: {},
  unmounted() { },
};

</script>
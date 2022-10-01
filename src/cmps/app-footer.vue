<template>
  <div class="footer-container">
    <div class="footer">
      <!-- <div class="logo"><img src="../styles/images/logo.svg" ></div> -->

      <div class="about">

        <div class="loc">
          <img src="../styles/images/icon-location.svg" alt="">
          <p>Avilable to work in Tel-Aviv, Central Israel, and US relocation</p>
        </div>

        <ul class="contact">
          <li class="num"><img src="../styles/images/icon-phone.svg"> <span>+1-543-123-4567</span></li>
          <li class="num"><img src="../styles/images/icon-email.svg"> <span>example@fylo.com</span></li>
        </ul>
        
      </div>
    </div>
    <app-action />
  </div>
</template>
  
<script>

import appAction from './app-action.vue';
export default {
  name: 'ProjectApp',
  components: { appAction, },
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

</style>
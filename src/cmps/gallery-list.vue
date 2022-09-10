<template>
  <section class="gallery-container">
    
    <header>
      <h2>Featured <span>projects.</span></h2>
    </header>
    <section class="gallery">

      <div class="text">


        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam sit asperiores alias ipsam delectus molestiae
          dolores, accusantium quibusdam natus in rerum illum
          aspernatur commodi nisi cum minus eum, beatae rem.
        </p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quis cupiditate quos quas, repellat nam dolorum.
        </p>

        <div class="tech">
          <header>Tech used</header>
          <div class="icons">
            <tech-icons :iconsToShow="['vue','vuex','vuer','socket','node','mongodb','cookies']" />

          </div>
        </div>
      </div>
      <div class="images">
        <gallery-item :item="item" />
        <div class="pager">
          > . . . . . >
        </div>
      </div>
    </section>

  </section>
</template>
 <script>
  import galleryItem from './gallery-item.vue';
  import techIcons from './icons.vue';
 export default {
 name: 'ProjectApp',
    components: {galleryItem,techIcons},
  data() {
   return {};
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style>
 </style>
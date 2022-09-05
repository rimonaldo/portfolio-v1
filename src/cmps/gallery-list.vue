<template>
  <section class="gallery-container">
    <section class="gallery">
      <div class="text">
        <header>
          <h2>Featured <span>projects.</span></h2>
        </header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam sit asperiores alias ipsam delectus molestiae
          dolores, accusantium quibusdam natus in rerum illum
          aspernatur commodi nisi cum minus eum, beatae rem.
        </p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quis cupiditate quos quas, repellat nam dolorum.
        </p>
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
 export default {
 name: 'ProjectApp',
    components: {galleryItem},
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
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
      <div class="portfolio">
        <gallery-item :project="projects[page]" />
      </div>


      <div class="pagintaion">
        <button @click="setPage(-1)"></button>
        <div :class="[idx === page ? 'active' : '', 'page']" v-for="(project,idx) in projects" :key="idx"></div>
        <button @click="setPage(1)"></button>
      </div>
    </section>

  </section>
</template>
<script>
import galleryItem from './gallery-item.vue';
import techIcons from './icons.vue';
export default {
  name: 'ProjectApp',
  components: { galleryItem, techIcons },
  data() {
    return {
      projects: ['https://i.ibb.co/KFBbC84/Scene.png', 'https://i.ibb.co/pxG17H7/Scene.png'],

      page: 0
    };
  },
  created() { },
  methods: {
    setPage(direction) {
      this.page += direction
      if (this.page < 0) this.page = this.projects.length - 1
      if (this.page > this.projects.length - 1) this.page = 0
      console.log(this.page);
    }
  },
  computed: {},
  unmounted() { },
};
</script>
<style>

</style>
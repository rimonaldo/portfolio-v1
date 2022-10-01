<template>
  <header class="gallery-header">
    <h2>Featured <span>projects.</span></h2>
  </header>
  <section class="gallery-body">

    <section class="gallery">

      <div class="pagintaion">
      <button @click="setPage(-1)"></button>
      <div :class="[idx === page ? 'active' : '', 'page-dot']" v-for="(project,idx) in projects" :key="idx"></div>
      <button @click="setPage(1)"></button>
    </div>
    
      <div class="portfolio">
        <gallery-item :project="projects[page]" />


      </div>
      <div class="text">
        <header>{{page === 0 ? 'Trailo':'popCoin'}}</header>
       
        <div v-html="script[page]"></div>


        <div class="tech">
          <header>Tech used</header>
          <tech-icons :iconsToShow="['vue','vuex','vuer','socket','node','mongodb','cookies']" />
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
  components: { galleryItem, techIcons },
  data() {
    return {
      projects: ['https://i.ibb.co/JrMxnKy/Scene.png', 'https://i.ibb.co/pxG17H7/Scene.png'],
      page: 0,
      script: [`<p> Trailo is a trello clone, a project managment system for a
          solo or team. the application was developed during
          a 10 days sprint , with a team of three.
          Trailo embraces the power of sockets, for real time
          changes between users of the same board, has a node.js
          backend and a TON of functionallity.
          <br> adding boards, groups, and cards. label each card,
          create deadline , add members to each card, summmery
          of all card with a dashboardand ofcourse,
          the iconic trello dragabillity.</p>`,

        `<p>popCoin is a blockchain token demo app, that lets you manage your contacts, recive and transfer tokens, and mine transactions.
          the token logic was made a a class with methods, to keep all its logic incapsulated. the key concepts that were implemented are inspired by popular cryptocurrencies as Ether and Bitcoin.
          <br>
          read a blog post about this topic here</p>
          `
      ]

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
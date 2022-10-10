<template>
  <section class="gallery-container">
    <div class="gallery-scroll"></div>
    <header class="gallery-header">
      <h2>Featured <span>Projects.</span></h2>
    </header>
    <section class="gallery-body">
      <gallery-item :project="projects[page]" :link="links[page]" />

      <div class="text">

        <div class="pagintaion">
          <button @click="setPage(-1)"></button>
          <div :class="[idx === page ? 'active' : '', 'page-dot']" v-for="(project,idx) in projects" :key="idx"></div>
          <button @click="setPage(1)"></button>
        </div>

        <div class="script">
          <header>{{page === 0 ? 'Trailo':'popCoin'}}</header>
          <div v-html="script[page]"></div>
          <router-link to="/blog" v-if="page !== 0 ">
            <span>Read a blog post about my journey developing popCoin here!</span>
          </router-link>
        </div>

        <div class="tech">
          <header>Tech stack</header>
          <tech-icons :iconsToShow="icons[page]" />
        </div>

      </div>

    </section>

    <div class="pagintaion">
      <button @click="setPage(-1)"></button>
      <div :class="[idx === page ? 'active' : '', 'page-dot']" v-for="(project,idx) in projects" :key="idx"></div>
      <button @click="setPage(1)"></button>
    </div>

  </section>
</template>
<script>
import galleryItem from './gallery-item.vue';
import techIcons from './tech-icons.vue';
export default {
  name: 'ProjectApp',
  components: { galleryItem, techIcons },
  data() {
    return {
      links: ['https://ca-traillo.herokuapp.com/#/', 'https://mrpopcoinprod.herokuapp.com/#/'],
      icons: [['vue', 'vuex', 'vuer', 'socket', 'node', 'mongodb', 'cookies'], ['react', 'redux', 'node', 'mongodb', 'cookies']],
      projects: ['https://i.ibb.co/JrMxnKy/Scene.png', 'https://i.ibb.co/pxG17H7/Scene.png'],
      page: 1,
      script: [`<p> Trailo, which is a Trello clone, is a project management
         system for individuals or teams. This application was developed
          during a ten day sprint, by a team of three. Trailo embraces the 
          power of sockets, for real time changes between users of the same
          board. Trailo was developed with a node.js backend and a wealth
          of functionality, which includes the ability to add boards,
          groups, and cards, label cards, create deadlines, add members
          to each card and display a summary of all cards on a dashboard,
          all while encompassing the  iconic Trello draggability.  </p>`,

        `<p>
          popCoin is a blockchain token demo app that is designed to let you manage your contacts, receive and transfer tokens, and mine transactions. 
          The token logic was developed as a class with methods, to keep all of its logic encapsulated. 
          The key concepts that I implemented include blockchain structure, transactions,
           and mining, and were inspired by popular cryptocurrencies, including Ether and Bitcoin. 
          <br>   
           </p>
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
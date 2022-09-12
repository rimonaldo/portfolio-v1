<template>
  <div class="item" :style="{'backgroundImage': `url(${project})`}"> </div>


</template>
 <script>
 export default {
 name: 'ProjectApp',
 props:{project:String},
    components: {},
  data() {
   return {
    projects:{
      trailo:'https://i.ibb.co/KFBbC84/Scene.png',
      popCoin:'https://i.ibb.co/pxG17H7/Scene.png',
    }
   };
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style>
 </style>
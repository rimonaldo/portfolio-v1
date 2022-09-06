<template>
    <!-- <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-97393f76=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-97393f76=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-97393f76=""></path></svg> -->
    <section class="icons" v-for="icon in iconsToShow" :key="icon">
        <div class="icon-container">
            <div class="icon" v-html="icons[icon]"> </div>
            <span>{{icon}}</span>
        </div>
    </section>

</template>
 <script>
 export default {
 name: 'ProjectApp',
    components: {},
    props:{iconsToShow:Array},
  data() {
   return {
    icons:{
        vue:'<svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-97393f76=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-97393f76=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-97393f76=""></path></svg>',
        vuex:'<img src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png">',
        vuer:'<img src="https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png">',
        socket:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet"><circle cx="128" cy="128" r="114" stroke="#010101" stroke-width="20" fill="none"/><path d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z" fill="#010101"/></svg>'
	
	

    }
   

   };
    },
  created() {
    // console.log(this.iconsToShow);
    this.renderIcons()
  },
 methods: {
    renderIcons(){
        const itcString = []
        for(const icon in this.icons){
            console.log(icon);
             this.iconsToShow.forEach(itc=>{
                if( icon === itc){
                    itcString.push(icon)
                }
            })
        }
        console.log(itcString);
        return []
    }
 },
 computed: {
    
 },
 unmounted() {},
  };
  </script>
 <style>
 </style>
<template>
    <section class="blog-page">
        <h1>Blogimon</h1>
        <ul>
            <li class="not-active"> 
                <div class="posted-at ">25/09/22</div>
                <!-- <router-link to="/blog/post/1">popCoin - a Blockchain adventure.</router-link> -->
                <router-link to="">popCoin - a Blockchain adventure *COMING SOON</router-link>
            </li>
            <li class="not-active"> 
                <div class="posted-at">01/11/22</div>
                <router-link to="">Second post *COMING SOON</router-link>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'blogList',
    components: {},
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
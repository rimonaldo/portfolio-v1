<template>
    <section class="blog-page">
        <h1>Blogimon</h1>
        <ul>
            <li> 
                <div class="posted-at">25/09/22</div>
                <router-link to="/blog/post/1">popCoin - a Blockchain adventure.</router-link>
            </li>
            <li> 
                <div class="posted-at">22/09/22</div>
                <router-link to="/blog/post/1">trailo - tirluli.</router-link>
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
<template>
    <section class="hero">
        <div class="content-container">
            <div class="text-container">
                <h1>Hello! I'm <span>Rimon</span></h1>
                <p>
                    Full Stack/Front End developer
                    with a passion<br>
                    for learning and creating. I
                    enjoy challenges, <br> and solving problems on my own and with a team. <br> I love writing
                    semantic,
                    logical, and meaningful code <br> that allows users to enjoy the experience.
                </p>
            </div>

            <button @click="emitScroll('.footer-container')" class="main-btn">Lets team up!</button>
        </div>

        <div class="avatar-container">
            <div class="dummy"></div>
            <div class="avatar"></div>
        </div>
    </section>

</template>
<script>
export default {
    name: 'ProjectApp',
    components: {},
    data() {
        return {};
    },
    created() { },
    methods: {
        emitScroll(element) {
            const el = document.querySelector(element);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    computed: {},
    unmounted() { },
};
</script>
<style>

</style>
<template>
    <section class="hero">
        <div class="content-container">
            <div class="text-container">
                <h1>Hello! I'm <span>Rimon</span></h1>
                <p class="p-animation">
                    Full Stack/Front End developer
                    with a passion
                    for learning and creating. I
                    enjoy challenges, and solving problems on my own and with a team. I love writing
                    semantic,
                    logical, and meaningful code that allows users to enjoy the experience.
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
            const elInput = document.querySelector('.email-input')
            // console.log(elInput);
            elInput.focus()
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
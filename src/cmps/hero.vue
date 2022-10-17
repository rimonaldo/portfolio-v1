<template>
    <section class="hero">
        <div class="content-container">
            <div class="text-container">
                <h1>Hello! I'm <span>Rimon</span></h1>
                <p class="hero-p hero-par">
                    Full Stack/Front End developer
                    with a passion
                    for learning and creating. I
                    enjoy challenges, and solving problems on my own and with a team. I love writing
                    semantic,
                    logical, and meaningful code that allows users to enjoy the experience.
                </p>
            </div>

            <button @click="scrollToFooter('.footer-scroll')" class="main-btn">Lets team up!</button>
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
    methods: {
        scrollToFooter(element) {
            const focus = this.focus
            setTimeout(focus, 500)
            const el = document.querySelector(element);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        },
        focus() {
            const elInput = document.querySelector('.email-input')
            elInput.focus()
        },
        add() {
            document.querySelector('.hero-p').classList.add('p-animation')
        }
    },
    mounted() {
        const animatePar = this.add
        setInterval(animatePar, 500)
    }
};
</script>
<style>

</style>
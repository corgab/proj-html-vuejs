<template>
    <div class="bg-hero">
        <div class="container">
            <NavSection />
            <HeroSection/>

        </div>
    </div>
</template>

<script>
import NavSection from './NavSection.vue';
import HeroSection from './HeroSection.vue'
    export default {
        components: {
            NavSection,
            HeroSection
        }
    }
</script>

<style lang="scss" scoped>
.bg-hero {
    background-image: url(../assets/images/restaurant-thumbnail.jpeg);
    // background-size: 60%, contain;
    background-size: contain;
    background-position: right;
    background-color: black;
    background-repeat: no-repeat;
}
</style>
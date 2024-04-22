<template>
    <div>
            <HeaderSection/>
            <MainSection/>

    </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';


    export default {
        components: {
            HeaderSection,
            MainSection
        }
    }
</script>

<style lang="scss">
@use './assets/general.scss'

</style>

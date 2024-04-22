<template>
    <div>
        <WhyUs/>
        <ExperienceSection titolino="FINE DINING EXPERIENCE" title="THE BEST TABLE IN TOWN"
        desc="Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla."
        btn="EXPLORE THE MENU"
        img="menu252x-1200x1375.jpg"
        />
    </div>
</template>

<script>
import ExperienceSection from './ExperienceSection.vue';
import WhyUs from './WhyUs.vue';
    export default {
        components: {
            WhyUs,
            ExperienceSection
        }
    }
</script>

<style lang="scss" scoped>

</style>
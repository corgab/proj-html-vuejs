<template>
    <div>
        <WhyUs/>
        <ExperienceSection titolino="FINE DINING EXPERIENCE" title="THE BEST TABLE IN TOWN"
        desc="Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla."
        btn="EXPLORE THE MENU"
        img="menu252x-1200x1375.jpg"
        />
        <FeedbackSection/>
    </div>
</template>

<script>
import ExperienceSection from './ExperienceSection.vue';
import WhyUs from './WhyUs.vue';
import FeedbackSection from './FeedbackSection.vue';
    export default {
        components: {
            WhyUs,
            ExperienceSection,
            FeedbackSection
        }
    }
</script>

<style lang="scss" scoped>

</style>
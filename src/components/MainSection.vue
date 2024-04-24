<template>
    <div>
        <WhyUs />
        <ExperienceSection titolino="FINE DINING EXPERIENCE" title="THE BEST TABLE IN TOWN"
            desc="Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla."
            btn="EXPLORE THE MENU" img="menu252x-1200x1375.jpg" />
        <FeedbackSection />
        <FoodSection />
        <NewsSection />
        <ExperienceSection titolino="ENJOY YOUR MEAL AT HOME" title="TAKEOUT NOW AVAILABLE" desc="Pellentesque vitae viverra risus, sagittis.
         Venenatis ridiculus scelerisque nisi in urna nulla non arcu moris tortor." btn="VIEW TAKEOUT MENU" img="slider72x-scaled.jpg"/>
         <MenuSection/>
         <RandomFood/>
    </div>
</template>
<script>
import ExperienceSection from './ExperienceSection.vue';
import WhyUs from './WhyUs.vue';
import FeedbackSection from './FeedbackSection.vue';
import FoodSection from './FoodSection.vue';
import NewsSection from './NewsSection.vue';
import MenuSection from './MenuSection.vue';
import RandomFood from './RandomFood.vue'

export default {
    components: {
        WhyUs,
        ExperienceSection,
        FeedbackSection,
        FoodSection,
        NewsSection,
        MenuSection,
        RandomFood
    }
}
</script>

<style lang="scss" scoped></style>
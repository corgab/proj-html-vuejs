<template>
    <div class="container--sm my-5">
        <div class="text-center">
            <h1>Latest news & promotions</h1>
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="row">
            <NewsCard class="col-4" img="menu362x-800x916.jpg" title="THE BEST COFEE IN TOWN" />
            <NewsCard class="col-4" img="blog72x-400x458.jpg" title="DISCOVER OUR NEW MENU" />
            <NewsCard class="col-4" img="blog82x-800x916.jpg" title="WE NOW ACCEPT SQUARE!" />
        </div>
    </div>
</template>

<script>
import NewsCard from './NewsCard.vue';

export default {
    components: {
        NewsCard
    }
}
</script>

<style lang="scss" scoped></style>
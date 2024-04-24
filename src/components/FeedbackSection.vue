<template>
    <div class="container--sm my-5">
        <div class="text-center">
            <h1>What critics are saying about us</h1>
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="row">
            <div class="col-6">
                <img src="../assets/images/blog72x-400x458.jpg" alt="">
            </div>
            <div class="col-6 bg-black cart">
                <TitleCard titolino="MEGGY STEWART" stars="&star;" title="NEW YORK TIMES" desc="Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
                 Habitant amet tincidunt id sapien accumsan sed at.
                 Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi." btn="READ FULL ARTICLE" />

            </div>
        </div>
    </div>
</template>

<script>
import TitleCard from './TitleCard.vue';
export default {
    components: {
        TitleCard,
    }
}
</script>

<style lang="scss" scoped>
img {
    height: 100%;
}

.col-6 {
    padding-right: 0;
}

.cart {
    transition: all 0.2s ease;
}

.cart:hover {
    transform: scale(1.1);
}
</style>
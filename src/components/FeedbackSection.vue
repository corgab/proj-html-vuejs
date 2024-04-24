<template>
    <div class="container--sm my-5">
        <div class="text-center">
            <h1>What critics are saying about us</h1>
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="row g-0">
            <div class="col-6">
                <img src="../assets/images/blog72x-400x458.jpg" alt="">
            </div>
            <div class="col-6 bg-black cart">
                <div class="px-3">
                    <TitleCard titolino="MEGGY STEWART" stars="&starf;" title="NEW YORK TIMES" desc="Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
                        Habitant amet tincidunt id sapien accumsan sed at.
                        Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi." btn="READ FULL ARTICLE" />
                </div>
            </div>
        </div>
        <div class="my-5 d-flex justify-content-between">
            <div class="bg-mary">
                <div class="overlay p-4">
                    <TitleCard titolino="MARY MAXEY" title="THE GUARDIAN" stars="&starf;" desc="Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
                        Habitant amet tincidunt id sapien accumsan sed." btn="READ FULL ARTICLE" />
                </div>
            </div>
            <div class="bg-patrik">
                <div class="overlay p-4">
                    <TitleCard titolino="MARY MAXEY" title="THE GUARDIAN" stars="&starf;" desc="Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
                Habitant amet tincidunt id sapien accumsan sed." btn="READ FULL ARTICLE" />
                </div>
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

.overlay {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
}

.bg-mary {
    background-image: url(../assets/images/info52x.jpg);
}

.bg-patrik {
    background-image: url(../assets/images/info12x.jpg);
}

.bg-mary,
.bg-patrik {
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
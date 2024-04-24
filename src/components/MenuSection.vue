<template>
    <div class="container my-5">
        <div class="row">
            <MenuCard class="menucard col-4 bg-body-secondary" title="MAIN COURSE" foodname="BRAISED ABALONE" costo="52" desc="Mollis ornare sit sapien, sodales.
             Cursus duis proin semper quisque." />
             <MenuCard class="menucard bg col-4 text-white marginneg" title="MAIN COURSE" foodname="BRAISED ABALONE" costo="52" desc="Mollis ornare sit sapien, sodales.
             Cursus duis proin semper quisque." :overlay="true" />
             <MenuCard class="menucard col-4 bg-body-secondary" title="MAIN COURSE" foodname="BRAISED ABALONE" costo="52" desc="Mollis ornare sit sapien, sodales.
             Cursus duis proin semper quisque." />
        </div>

    </div>
</template>

<script>
import MenuCard from './MenuCard.vue';

export default {
    components: {
        MenuCard
    }
}
</script>

<style lang="scss" scoped>
.menucard {
    padding: 0;
}

.bg {
    background-image: url(../assets/images/misc22x.jpg);
    background-size: cover;
}

.marginneg {
    margin: -30px 0px;
}
</style>
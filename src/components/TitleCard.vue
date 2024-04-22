<template>
    <!-- <div class="d-flex card-width gap-5 p">
        <div class="trattino">
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="content">
            <p class="text--gray lh-base">THE BEST TABLE IN TOWN</p>
            <h1 class="title text-white lh-base">FINE DINING EXPERIENCE</h1>
            <p class="text--gray lh-base">Pellentesque vitae viverra risus, sagittis.
                Venenatis ridiculus scelerisque nisi in urna nulla.
                Sit tempor a et nisl, ac felis.
            </p>
            <a href="#" class="btn btn-outline-light my-2">EXPLORE THE MENU</a>
        </div>
    </div> -->
    <div class="d-flex card-width gap-5 p">
        <div class="trattino">
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="content">
            <p class="text--gray lh-base"> {{ titolino }}</p>
            <h1 class="title text-white lh-base"> {{ title }}</h1>
            <p class="text--gray lh-lg"> {{ desc }}
            </p>
            <a href="#" class="btn btn-outline-light my-4"> {{ btn }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            titolino: String,
            desc: String,
            btn: String,
        }
    }
</script>

<style lang="scss" scoped>
.card-width {
    width: 400px;
}

.icon {
    font-size: 20px;
}

.p {
    padding: 80px 0px;
}

.content > *:not(:last-child){
    padding: 5px 0px;
}

.title {
    font-size: 3rem;
}
</style>
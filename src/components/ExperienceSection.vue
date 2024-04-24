<template>
    <div class="row bg-black gap-custom">
        <div class="col-6">
            <img :src="'/src/assets/images/'+img" alt="">
        </div>
        <div class="d-flex col-auto card-width gap-5 p">
            <div class="trattino">
                <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
            </div>
            <div class="content">
                <p class="text--gray lh-base"> {{ titolino }}</p>
                <h1 class="title text-white lh-base fw-bold"> {{ title }}</h1>
                <p class="text--gray lh-lg"> {{ desc }}
                </p>
                <a href="#" class="btn btn-outline-light my-4"> {{ btn }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        title: String,
        titolino: String,
        desc: String,
        btn: String,
        img: String
    }
}
</script>

<style lang="scss" scoped>

.gap-custom {
    column-gap: 7rem;
}

.card-width {
    width: 400px;
}

.p {
    padding: 80px 0px;
}

.content>*:not(:last-child) {
    padding: 5px 0px;
}

.title {
    font-size: 3rem;
}
</style>
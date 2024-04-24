<template>
    <div class="d-flex card-width gap-5 p ">
        <div class="trattino">
            <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
        </div>
        <div class="content">
            <p class="text--gray lh-base"> {{ titolino }}</p>
            <h1 class="title text-white lh-base fw-bold"> {{ title }}</h1>
            <ul class="d-flex">
                <li v-for="star in 5" class="text--gray star">
                    <!-- <font-awesome-icon class="text--gray icon" :icon="['fas', 'star']" /> -->
                    {{ stars }}
                </li>
            </ul>
            <!-- <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" /> -->
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
            stars: String
        }
    }
</script>

<style lang="scss" scoped>
.card-width {
    width: 400px;
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

.star {
    padding: 10px;
}
</style>
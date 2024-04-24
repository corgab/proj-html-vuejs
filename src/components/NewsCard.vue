<template>
    <div class="text-center">
        <img :src="'/src/assets/images/' + img" alt="">
        <div class="my-4">
            <h1 class="fs-4 fw-bold">{{ title }}</h1>
            <p class="py-2">By admin Published On: January 7th, 2020 Categories: News</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
    }
}
</script>

<style lang="scss" scoped></style>
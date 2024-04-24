<template>
    <div :class="overlay ==true ? 'bg' : ''">
        <div :class="overlay ==true ? 'overlay' : ''">
            <div class="p-5">
                <h1 class="fw-bold pb-3"> {{ title }}</h1>
                <div class="menu">
                    <div v-for="food in 4">
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fs-4 fw-bold"> {{ foodname }}</h3>
                            <h3> {{ '$' + costo }}</h3>
                        </div>
                        <p :class="overlay ==true ? 'text--gray' : ''"> {{ desc }}</p>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        foodname: String,
        costo: String,
        desc: String,
        overlay: Boolean
    },
}
</script>

<style lang="scss" scoped>
.overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9346332282913166) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>
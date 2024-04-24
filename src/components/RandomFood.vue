<template>
    <div class="section">
        <div class="bg">
            <div class="container--sm">
                <div class="cart bg-black text-white p-5">
                    <div class="d-flex justify-content-between align-items-center pb-5">
                        <h2 class="fs-3">BRAISED ABALONE</h2>
                        <p>$52</p>
                    </div>
                    <div class="py-4">
                        <font-awesome-icon class="text--gray icon" :icon="['fas', 'minus']" />
                        <p>Pretium accumsan porttitor viverra leo gravida mollis imperdiet.
                            Fringilla nibh pharetra sociis leo amet.
                        </p>
                        <a href="#" class="btn btn-outline-light my-3">
                            VIEW IN THE MENU
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bg {
    background-image: url(../assets/images/menu372x.jpg);
    background-position: center;
    height: 700px;
    position: relative;
}

.cart {
    position: absolute;
    width: 400px;
    top: 50%;
    left: 10%;
    transform: translatey(-50%);;
}

</style>
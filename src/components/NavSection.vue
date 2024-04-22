<template>
    <div>
        <div class="row align-items-center p">
            <div class="col">
                <img class="d-block logo" src="../assets/images/logo-restaurant.png" alt="">
            </div>
            <div class="col-auto">
                <ul class="list d-flex gap-4 text--gray align-items-center">
                    <li>Home</li>
                    <li>Culinary History</li>
                    <li>Our Team</li>
                    <li>Our Menu</li>
                    <li>Takeout <span class="btn btn-outline-light btn-sm">new</span></li>
                    <li>Bulletin</li>
                    <li>Reservation</li>
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.logo {
    width: 315px;
}

.list {
    font-size: 20px;
}

.p {
    padding: 30px 0px;
}


</style>
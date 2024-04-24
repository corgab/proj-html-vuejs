<template>
    <div class="section bg">
        <!-- <img src="../assets/images/menu272x.jpg" alt=""> -->
        <h3 class="text--gray">KUNG PAO CHICKEN - $32</h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.section {
    position: relative;
    height: 500px;
}

.bg {
    background-image: url(../assets/images/menu272x.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

h3 {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
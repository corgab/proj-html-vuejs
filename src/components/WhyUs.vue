<template>
    <div class="container--sm my-5">
        <div class="row gap-5">
            <div class="col">
                <p class="fs-5"> <b>HAC TELLUS, FELIS RISUS AT</b> mattis mattis. Eget euismod semper eget tortor, donec amet, blandit. 
                    Tristique facilisi faucibus elementum feugiat in nam in feugiat. 
                    Ipsum odio etiam duis facilisis amet vulputate.
                </p>

                <h1 class="text-uppercase fw-bold py-4 lh-base">food is our common ground, a universal experience.</h1>
                <p class="fs-5">
                    Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui.
                </p>
                <img class="signature" src="../assets/images/signature.jpg" alt="">
            </div>
            <div class="col descimg">
                <img src="../assets//images/info22x.jpg" alt="">
                <p class="overlay-text">CALIFORNIA ROLLS - $22</p>
            </div>
        </div>
        <div class="cardwhyus">
            <div class="row my-5 justify-content-between gap-3">
                <div v-for="card in 3" class="col text-center">
                    <img src="../assets/images/sushi-1.png" alt="">
                    <h1 class="fw-bold fs-3 py-3">THE BEST TABLE IN TOWN</h1>
                    <p>Sed aenean egestas ut aliquam turpis mauris, molestie. 
                        Vitae tellus tempor sem id tempus neque, tellus turpis turpis. 
                        Morbi tortor id gravida aliquet.
                    </p>
                    <a href="#" class="btn btn-overlay btn-outline-secondary my-3">EXPLORE THE MENU</a>
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
img {
    width: 100%;
}

.descimg {
    position: relative;
}

.overlay-text {
    font-size: 20px;
    color: white;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}

.descimg:hover .overlay-text {
    display: block;
  }

.signature {
    width: 200px;
    padding: 10px 0px;
}

.cardwhyus img {
    width: 100px;
}
</style>
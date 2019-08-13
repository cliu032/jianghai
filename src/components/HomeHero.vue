<script>
export default {
    name: 'HomeHero'
};
</script>

<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="home-hero--banner jianghai--color__background">
                <!-- <img src="assets/logo.png"> -->
                <div class="display-4 font-weight-black jianghai--text__heading text-xs-center">TESTTEST</div>
                <div class="display-4 font-weight-black jianghai--text__heading text-xs-center mb-3">TESTTESTTESTTEST</div>
                <div class="display-1 font-weight-bold jianghai--text__subheading text-xs-center">FACADE | ALUMINIUM | BALUSTRADE</div>
            </div>
            <v-btn fab class="mt-5 grey darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<style scoped>
.home-hero {
    background: url('../assets/WcigmQHg.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
}

.home-hero--banner {
    width: 100vw;
    padding: 5vh 0;
}
</style>
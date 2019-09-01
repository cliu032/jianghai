<script>
export default {
    name: 'HomeHero',
    props: {
        text1: {
            type: String
        },
        text2: {
            type: String
        },
        image: {
            type: String
        }
    }
};
</script>

<template>
    <v-container fluid fill-height class="home-hero" :style="{ backgroundImage: `url(${image})` }">
        <v-layout justify-center align-center column pa-5>
            <div class="home-hero--banner jianghai--color__background">
                <!-- <img src="assets/logo.png"> -->
                <div
                    class="display-4 font-weight-black jianghai--text__heading text-xs-center"
                >
                    {{ text1 }}
                </div>
                <div
                    class="display-4 font-weight-black jianghai--text__heading text-xs-center mb-3"
                >
                    {{ text2 }}
                </div>
                <div
                    class="display-1 font-weight-bold jianghai--text__subheading text-xs-center"
                >
                    FACADE | ALUMINIUM | BALUSTRADE
                </div>
            </div>
            <!-- <v-btn fab class="mt-5 grey darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn> -->
        </v-layout>
    </v-container>
</template>

<style scoped>
.home-hero {
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

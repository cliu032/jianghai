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
                <div
                    class="display-3 font-weight-black jianghai--text__heading text-xs-center"
                >
                    JINAGHAI
                </div>
                <div
                    class="display-3 font-weight-black jianghai--text__heading text-xs-center mb-3"
                >
                    CONSTRUCTION
                </div>
                <div
                    class="display-1 font-weight-bold jianghai--text__subheading text-xs-center"
                >
                    FACADE | ALUMINIUM | BALUSTRADE
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<style scoped>
.home-hero {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
}

.home-hero--banner {
    width: 100vw;
    padding: 5vh 0;
}
</style>

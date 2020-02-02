<template>
    <v-container fluid fill-height class="home-hero">
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

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/WcigmQHg.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}

.home-hero--banner {
    width: 100vw;
    padding: 5vh 0;
}
</style>

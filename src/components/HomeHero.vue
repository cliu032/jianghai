<template>
    <v-container
        fluid
        fill-height
        class="home-hero"
        :style="{ backgroundImage: `url(${image})` }"
    >
        <v-layout justify-center align-center column pa-5>
            <div
                class="home-hero--banner jianghai--color__background ml-3 mr-3"
            >
                <v-img
                    :src="require('../assets/logo_vert_dark.png')"
                    max-height="125"
                    max-width="90vw"
                    contain
                    class="mt-2 mb-3 ml-auto mr-auto"
                ></v-img>
                <div
                    class="jianghai--text__light text-xs-center"
                    :class="{
                        'jianghai--text__heandline_xs':
                            $vuetify.breakpoint.xsOnly,
                        'jianghai--text__headline': $vuetify.breakpoint.smAndUp
                    }"
                >
                    {{ text1 }}
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    props: {
        text1: String,
        image: String
    }
};
</script>

<style scoped>
.home-hero {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
}

.home-hero--banner {
    width: 100vw;
    padding: 12px 0;
}
</style>

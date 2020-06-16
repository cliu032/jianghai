<template>
    <v-footer>
        <v-img
            :src="require('../assets/logo2.svg')"
            max-height="125"
            max-width="90vw"
            contain
            class="my-4 mx-auto"
        ></v-img>
        <v-col class="text-center" cols="12">
            © {{ new Date().getFullYear() }}
            Jiang Hai Construction | ABN 47 602 264 568
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped></style>

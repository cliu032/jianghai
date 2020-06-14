<template>
    <v-container id="contact">
        <v-row>
            <v-flex xs12 class="text-center display-1 font-weight-black my-5"
                >Contact Us</v-flex
            >
        </v-row>
        <v-row justify="center">
            <v-col
                cols="8"
                offset="1"
                lg="5"
                offset-lg="0"
                class="jianghai--text__title jianghai--text__secondary"
            >
                <v-container>
                    <v-layout column>
                        <v-flex mt-2 mb-3>
                            <v-icon color="#c6a877" class="px-1"
                                >fas fa-envelope</v-icon
                            >
                            info@jianghai.com.au
                        </v-flex>
                        <v-flex my-3>
                            <v-icon color="#c6a877" class="px-1"
                                >fas fa-phone</v-icon
                            >
                            +61 424 084 249
                        </v-flex>
                        <v-flex my-3>
                            <v-icon color="#c6a877" class="pl-2 pr-1"
                                >fas fa-map-marker-alt</v-icon
                            >
                            3 Chapel St, Belmore NSW 2192
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-col>
            <v-col cols="7" lg="4">
                <v-form ref="form">
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="E-mail *" required></v-text-field>
                    <v-text-field label="Phone *" required></v-text-field>
                    <v-textarea required>
                        <template v-slot:label>
                            <div>Message *</div>
                        </template>
                    </v-textarea>
                    <v-btn :disabled="false" color="#c6a877" class="mr-4">
                        <div class="jianghai--text__secondary">
                            Send us a message
                        </div>
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeContact'
};
</script>

<style scoped></style>

<template>
    <v-container id="projects">
        <v-row>
            <v-col class="text-center display-1 font-weight-black my-5"
                >Projects</v-col
            >
        </v-row>
        <v-row>
            <v-col
                v-for="(project, index) in projects"
                :key="index"
                sm="6"
                md="4"
            >
                <v-card flat tile class="d-flex">
                    <v-img
                        :src="`${project.image}&h=600`"
                        :lazy-src="`${project.image}&w=4&h=4`"
                        height="300"
                    >
                        <v-container fill-height fluid bottom-shade>
                            <v-layout flex-column justify-end align-start>
                                <span
                                    class="jianghai--text__title jianghai--text__light mb-1"
                                >
                                    {{ project.title }}
                                </span>
                                <span
                                    v-if="project.content.length > 0"
                                    class="jianghai--text jianghai--text__light"
                                >
                                    <v-icon dark class="mr-1" size="1.1em">
                                        fas fa-map-marker-alt
                                    </v-icon>
                                    {{ project.content }}
                                </span>
                            </v-layout>
                        </v-container>
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    props: {
        projects: Array
    }
};
</script>

<style scoped></style>

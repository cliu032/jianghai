<template>
    <v-container id="projects" grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Projects</v-flex
            >
        </v-layout>
        <v-layout row wrap>
            <v-flex
                v-for="(project, index) in projects"
                :key="index"
                xs12
                sm12
                md4
            >
                <v-card>
                    <v-img :src="project.image" height="400">
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
                    </v-img>
                </v-card>
            </v-flex>
        </v-layout>
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

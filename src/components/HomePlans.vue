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
                        <!-- <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">{{
                                        project.title
                                    }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container> -->
                    </v-img>
                    <!-- <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">
                                {{ project.title }}
                            </h3>
                            <div>
                                {{ project.content }}
                            </div>
                        </div>
                    </v-card-title> -->
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

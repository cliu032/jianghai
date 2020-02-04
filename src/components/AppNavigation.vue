<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="grey darken-3"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="grey darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <template v-for="(item, index) in items">
                <v-btn
                    v-if="index !== items.length - 1"
                    :key="index"
                    flat
                    class="hidden-sm-and-down"
                >
                    <a :href="`#${item.href}`" class="noDecoration">{{
                        item.title
                    }}</a>
                </v-btn>
                <v-btn
                    v-if="index === items.length - 1"
                    :key="index"
                    color="grey darken-3"
                    class="hidden-sm-and-down"
                >
                    <a :href="`#${item.href}`" class="noDecoration">{{
                        item.title
                    }}</a>
                </v-btn>
            </template>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Jiang Hai Construction',
            drawer: false,
            items: [
                { title: 'Company', href: 'about' },
                { title: 'Projects', href: 'projects' },
                { title: 'Contact Us', href: 'contact' }
            ]
        };
    }
};
</script>

<style scoped></style>

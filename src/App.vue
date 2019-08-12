<template>
    <v-app>
        <app-navigation></app-navigation>
        
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style>
@import url('assets/fonts/frutiger.css');
@import url('assets/fonts/bebasneue.css');

.jianghai--color__background {
    background: rgba(48,48,48, 0.8);
}

.jianghai--text__heading {
    font-family: 'Frutiger Bold', 'Courier New', Courier, monospace;
    font-weight: unset !important;
    letter-spacing: unset !important;
    color: #c6a877;
}

.jianghai--text__subheading {
    font-family: 'Frutiger', 'Courier New', Courier, monospace;
    font-weight: unset !important;
    letter-spacing: unset !important;
    color: #c6a877;
}
</style>

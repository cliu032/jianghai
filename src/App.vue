<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content class="body-content" transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<style>
@import url('assets/fonts/frutiger.css');
@import url('assets/fonts/bebasneue.css');

.jianghai--text__headline {
    font-family: 'Frutiger';
    letter-spacing: 4px;
    font-size: 1.5em;
}

.jianghai--text__heandline_xs {
    font-family: 'Frutiger';
    letter-spacing: 0.5vw;
    font-size: 4vw;
}

.jianghai--text__light {
    color: #fff;
}

.jianghai--color__background {
    background: rgba(48, 48, 48, 0.8);
}

.application--wrap {
    min-height: unset;
}

.body-content {
    height: 80vh;
}

.noDecoration {
    text-decoration: none;
    color: unset;
}
</style>

<template>
    <div id="testApp">
        <h1>{{ fields.title }}</h1>
    </div>
</template>

<script>
    var testApp = new Vue({
        el: "testApp",
        data: {
            fields: {
                title: null,
                logo: null,
                richContent: null
            }
        },
        methods: {
            getContent () {
                this.$prismic.client.getSingle('home')
                    .then((document) => {
                        this.fields.title = document.data.title;
                    })
            }
        },
        created () {
            this.getContent();
        }
    });
</script>
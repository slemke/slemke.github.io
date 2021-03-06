<template>
    <div id="app">
        <page-header></page-header>
        <router-view />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
    name: 'App',
    components: {
        PageHeader
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    background-color: #121212;
    color: #d8dadd;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.wrapper {
    max-width: 600px;
    margin: 0 auto;
    padding: 1.5rem;
}
</style>

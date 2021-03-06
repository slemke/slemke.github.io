<template>
    <div class="header">
        <div class="wrapper">
            <h1 class="header__title">Personal awesome list of <a href="https://github.com/slemke" target="_blank">slemke</a></h1>
            <p class="header__description">A place to store all the awesome links that keep overflowing my bookmarks.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader'
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #1b2330;

    &__title {
        font-size: 1.5rem;
        margin-bottom: 1rem;

        a {
            color: #0380ea;
            text-decoration: none;

            &:hover {
                color: #00aa54;
            }
        }
    }

    &__description {
        font-size: 1rem;
    }
}
</style>

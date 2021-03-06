<template>
    <div class="links wrapper">
        <div class="category" v-for="category in links" :key="category.title">
            <h2 class="category__title">
                {{ category.title }}
            </h2>
            <ul class="category__links">
                <li v-for="link in category.links" :key="link.title" class="link">
                    <div class="link__main">
                        <a :href="link.url" :title="link.title" target="_blank" class="link__anchor">
                            {{ link.title }}
                        </a>
                        <small class="link__baseurl">
                            {{ getBaseUrl(link.url) }}
                        </small>
                    </div>
                    <div class="link__tags">
                        <span class="link__tag" v-for="tag in link.tags" :key="tag">
                            {{ tag }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import links from '../data/links.json';

export default {
    name: 'Links',
    data() {
        return {
            links
        };
    },
    methods: {
        getBaseUrl(url) {
            return new URL(url).host;
        }
    }
};
</script>

<style lang="scss">
.category {
    margin-bottom: 1.5rem;

    &:last-child { margin-bottom: 0;}

    &__title {
        padding-bottom: 0.25rem;
        color: #868995;
    }
}

.link {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0;
    
    &__main {
        display: flex;
        flex-direction: column;
    }

    &__anchor {
        color: #0380ea;
        text-decoration: none;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        font-weight: bold;

        &:hover {
            color: #d4d4d4;
        }
    }

    &__baseurl {
        color: #868995;
    }

    &__tags {
        margin-left: auto;
    }

    &__tag {
        display: inline-block;
        padding: 0.3rem;
        font-size: 0.75rem;
        background-color: #00aa54;
        margin: 0.5rem 0.25rem;
        border-radius: 0.25rem;
    }
}

@media(max-width: 768px) {
    .category .link {
        flex-direction: column;
        align-items: baseline;

        &__tags {
            margin-left: 0;

            .link__tag:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>

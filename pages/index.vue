<template>
    <div class="fill-height pa-4 page">

        <v-row>
            <v-col v-for="movie,i in movies" :key="i">
                <Movie :data='movie' :categories="categories"></Movie>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import axios from 'axios';
import Movie from "@/components/Movie.vue"
import { mapActions, mapGetters } from "vuex"

export default {
    components: {
        Movie

    },
    data() {
        return {
            categories:{}
        }
    },

    created() {
        this.getCategories()
        this.getBackAllMovies()
        
    },
    methods: {
        ...mapGetters(['currentSearch', 'getMovies']),
        ...mapActions(['getBackAllMovies']),
        getCategories() {
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US').then(r=> this.categories = r.data.genres)
        }

    },
    computed: {
        movies() {
            return this.getMovies()
        },

    }
}
</script>

<style scoped>
.page {
    height: 100%;
    width: 100%;

    display: grid;
    place-content: center;
}
</style>

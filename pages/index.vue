<template>
    <div class="fill-height pa-4 page">

        <v-row>
            <v-col v-for="movie,i in movies" :key="i">
                <Movie :data='movie'></Movie>
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
            // movies: [
            //     //     {original_title:'Truth Or Dare', overview:'lorem ipsum dolor amet', vote_average:5, category:['Horror', 'Comedy', "Drama"], duration:0, poster_path:'/ei2waWQAG8NP244WShIFgGu9IOu.jpg', date:'feb 01 2019'},
            //     //     {original_title:'Truth Or Dare', overview:'lorem ipsum dolor amet', vote_average:5, category:['Horror', 'Comedy', "Drama"], duration:0, poster_path:'/lyqkQ6y7d4YGVQrRjtmGTRMVcDY.jpg', date:'feb 01 2019'},
            //     //     {original_title:'Truth Or Dare', overview:'lorem ipsum dolor amet', vote_average:5, category:['Horror', 'Comedy', "Drama"], duration:0, poster_path:'/gPnyPMtFLHjx77CXASOXYC3urhb.jpg', date:'feb 01 2019'},
            //     // 
            // ]
        }
    },

    created() {
        this.getBackAllMovies()
    },
    methods: {
        ...mapGetters(['currentSearch', 'getMovies']),
        ...mapActions(['getBackAllMovies']),
        

    },
    computed: {
        movies() {
            return this.getMovies()
        }
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

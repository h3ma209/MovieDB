<template>
    <v-card :loading="loading" class="mx-auto my-12 elevation-1" max-width="400">
        <v-img class="" height="450" cover :src="'https://image.tmdb.org/t/p/original'+data.poster_path"></v-img>
        <v-card-title>{{ data.original_title }}</v-card-title>
        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :value="data.vote_average-5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ms-4">
                    {{data.vote_average}}/10
                </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
            </div>
            <div>{{data.overview}}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        
        <v-card-text>
            <v-chip-group  active-class="deep-purple accent-4 white--text" column>
                <v-chip v-for="category,i in ['horror','Comedy', 'Drama']" :key="i">
                    {{category}}
                </v-chip>
            </v-chip-group>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['data'],
    setup() {

    },
}
</script>
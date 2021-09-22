<template>
    <v-app dark>

        <v-main>
            <v-app-bar class="pr-2 pl-2" color="" >
                <v-spacer></v-spacer>
                <v-toolbar-title>MovieDB</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-toolbar flat style="background:none" >
                    <v-text-field v-model="search_bar" hide-details label="Search for movie"  single-line></v-text-field>
                    <v-btn elevation="0" @click="searchForMovie"><v-icon flat>mdi-magnify</v-icon></v-btn>
                    <v-spacer></v-spacer>
                </v-toolbar>

            </v-app-bar>
            <v-container class="ma-0 pa-0 fill-height" fluid>
                <nuxt />
            </v-container>
        </v-main>

        <v-footer :absolute="!fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>

    </v-app>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    mounted(){
        this.search_bar = this.getCurrentSearch()
    },
    methods:{
        ...mapMutations(['setCurrentSearch']),
        ...mapGetters(['getCurrentSearch']),
        ...mapActions(['searchForMoviesByName']),

        searchForMovie(){
            this.setCurrentSearch(this.search_bar)
            if(this.search_bar.length !=0){
                this.searchForMoviesByName()
            }
        }
    },
    data() {
        return {
            search_bar:'',
            fixed:false,
        }
    },
    watch:{
        search_bar:{
            handler(ol, ne){
                
            }
        }
    }
}
</script>

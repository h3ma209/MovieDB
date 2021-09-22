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
                    <v-text-field v-model="search_name" hide-details label="Search for movie"  single-line></v-text-field>
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
import {mapGetters, mapActions} from 'vuex';
export default {
    mounted(){
        // this.search_name = this.$store.getters.getCurrentSearch
        
    },
    methods:{

        ...mapActions({
            movies:'Movies'
        }),
        ...mapGetters({
            search_name:'currentSearch'
        })
    },
    data() {
        return {
            
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
    computed:{
        search_name(){
            return this.$store.getters.getCurrentSearch
        }
    }
}
</script>

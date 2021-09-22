import axios from "axios"
export const state = () => ({
    currentSearch: '',
    Movies: [],
    
})

export const mutations = {
    setCurrentSearch(state, payload) {
        state.currentSearch = payload
    },
    setAllMovies(state, payload){
        state.Movies = payload
    },


}

export const getters = {
    getCurrentSearch(state) {
        return state.currentSearch
    },
    getMovies(state){
        return state.Movies
    }
}

export const actions = {
    async getBackAllMovies(state){
        const mvs = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&page=1')
        const mv = mvs.data.results
        state.commit('setAllMovies',mv)
    },
    async searchForMoviesByName({commit,state}){
        const results = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&query='+state.currentSearch)
        const returned_search = results.data.results
        console.log(returned_search)
        commit('setAllMovies',returned_search)

    }

}

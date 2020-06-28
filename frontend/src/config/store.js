import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null
    },
    mutations: {
        toggleMenu(state, isVisible){
            if(!state.user){
                state.isMenuVisible = false
                return
            }
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else {
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user){
            state.user = user
            if(user){
                axios.defaults.headers.common['authorization'] = `bearer ${user.token}` 
                state.isMenuVisible = true
            }else{
                axios.defaults.headers.common['authorization']
                state.isMenuVisible = false
            }
        }
    }
})
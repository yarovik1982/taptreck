import { createStore } from 'vuex'
import axios from 'axios'
import {favoritesList, newsList} from '@/HelperFunctions/Lists.js'
import { BASE_URL, apiList } from '@/HelperFunctions/BaseUrl.js'
import {messages} from '@/HelperFunctions/Messages.js'

export default createStore({
  state: {
    favoritesList,
    newsList,
    messages,
    currentMessage:'',
    beerData : [],
    beweryData: [],
    placeData : [],
  },
  getters: {
    BEER_DATA(state){
      return state.beerData
    },
    BEWERYES_DATA(state){
      return state.beweryData
    },
    PLACE_DATA(state){
      return state.placeData
    }
  },
  mutations: {
    setMessage(state, message){
      state.currentMessage = message
    },
    setBeerData(state, beerData){
      state.beerData = beerData
    },
    setBeweryesData(state, beweryData){
      state.beweryData = beweryData
    },
    setPlaceData(state, placeData){
      state.placeData = placeData
    },
  },
  actions: {
    async CREATE_USER({commit}, registerData){
      try{
        const response = await axios.post(BASE_URL + apiList.userCreate, registerData)
        if(response.status === 200){
          commit('setMessage', messages.registerSuccess)
          setTimeout(()=>{
            commit('setMessage', '')
          },5000)
        }else{
          commit('setMessage', messages.registerError)
        }
      }catch(error){
        commit('setMessage', messages.errorRequest)
        console.log(error);
      }
    },
    GET_DATA_BEER({commit}){
      return axios(BASE_URL + apiList.beerList.main + apiList.beerList.queriedOptions[0],{
        method:'GET',
      })
      .then(response => {
        commit('setBeerData', response.data)
        // console.log(response.data);
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_DATA_BREWERYES({commit}){
      return axios(BASE_URL + apiList.breweryList.main + apiList.breweryList.queriedOptions[0],{
        method:'GET',
      })
      .then(response => {
        commit('setBeweryesData', response.data)
        // console.log(response.data);
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_DATA_PLACE({commit}){
      return axios(BASE_URL + apiList.placesList.main + apiList.placesList.queriedOptions[0],{
        method:'GET',
      })
      .then(response => {
        commit('setPlaceData', response.data)
        console.log(response.data);
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  modules: {
  }
})

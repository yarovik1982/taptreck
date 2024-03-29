import { createStore } from 'vuex'
import axios from 'axios'
import {favoritesList, newsList} from '@/HelperFunctions/Lists.js'
import { BASE_URL, apiList } from '@/HelperFunctions/BaseUrl.js'
import {messages} from '@/HelperFunctions/Messages.js'
import { GetToken , ClearDataProfile} from '@/HelperFunctions/GetDataProfile'

export default createStore({
  state: {
    jwt:GetToken(),
    api_key_dadata:"f28c978bf7b07afdef72df486e0336920a7f3bd8",
    secret_key_dadata:'cf76bbc76e85df0b224a5054164edde6a47a3ec6',
    favoritesList,
    newsList,
    messages,
    currentMessage:'',
    beerData : [],
    beweryData: [],
    placeData : [],
    beerAddBlockData:[],
    placeAddBlockData:[],
    feedbackListMain:[],
    userSilesData:[],
    itemSileData:{},
    userBreweryData:[],
    beerListByPlace:[],
    placeAdblock:[],
    breweryAdblockData:[],
    beersBrewery: [],
    searchResult: [],
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
    },
    BEER_ADD_BLOCK_DATA(state){
      return state.beerAddBlockData
    },
    PLACE_ADD_BLOCK_DATA(state){
      return state.placeAddBlockData
    },
    FEEDBACK_LIST_MAIN(state){
      return state.feedbackListMain
    },
    USER_SILES_DATA(state){
      return state.userSilesData
    },
    GET_ITEM(state){
      return state.itemSileData
    },
    USER_BREWERY_DATA(state){
      return state.userBreweryData
    },
    PLACE_IS_ADDED_LIST(state){
      return state.pliceIsAddedList
    },
    BEER_LIST_BY_PLACE(state){
      return state.beerListByPlace
    },
    PLACE_ADBLOCK(state){
      return state.placeAdblock
    },
    BREWERY_ADBLOCK(state){
      return state.breweryAdblockData
    },
    BEERS_BREWERY(state){
      return state.beersBrewery
    },
    GET_SEARH_RESULT(state){
      return state.searchResult
    }

  },
  mutations: {
    setMessage(state, message){
      state.currentMessage = message
    },
    setBeerData(state, data){
      // state.beerData = [...state.beerData, ...data]
      state.beerData = data
    },
    setBeersBrewery(state, data){
      // state.beersBrewery = [...state.beersBrewery, ...data]
      state.beersBrewery = data
    },
    setBeweryesData(state, data){
      // state.beweryData = [...state.beweryData, ...data]
      state.beweryData = data
    },
    setPlaceData(state, data){
      // state.placeData = [...state.placeData, ...data]
      state.placeData = data
    },
    setBeerAddBlockData(state, beerAddBlockData){
      state.beerAddBlockData = beerAddBlockData
    },
    setBreweryAddBlockData(state, breweryAdblockData){
      state.breweryAdblockData = breweryAdblockData
    },
    setPlaceAddBlockData(state, placeAddBlockData){
      state.placeAddBlockData = placeAddBlockData
    },
    setFeedbackListMain(state, feedbackListMain ){
      state.feedbackListMain = feedbackListMain
    },
    setUserSilesData(state, userSilesData){
      state.userSilesData = userSilesData
    },
    setItemSile(state, itemSileData){
      state.itemSileData = itemSileData
    },
    setUserBreweryData(state, userBreweryData){
      state.userBreweryData = userBreweryData
    },
    setPliceIsAddedList(state, pliceIsAddedList){
      state.pliceIsAddedList = pliceIsAddedList
    },
    setBeerListByPlace(state, beerListByPlace){
      state.beerListByPlace = beerListByPlace
    },
    setPlaceAdblock(state, placeAdblock){
      state.placeAdblock = placeAdblock
    },
    setSearchResult(state, searchResult){
      state.searchResult = searchResult
    }
  },
  actions: {
    GET_SEARCH_DATA({commit}, {userId = '', name}){
      return axios(BASE_URL + `${apiList.searchResult.main}?userId=${userId}&name=${name}`, {
        method:'GET',
        headers:{Authorization:`Bearer ${this.state.jwt}`},
      })
      .then(response => {
        commit('setSearchResult', response.data)
        return response
      })
      .catch(error => {
        if(error.response.status === 401){
          ClearDataProfile()
        }
        console.log(error);
      })
    },
    GET_BEER_LIST_BY_PLACE({commit}, placeId){
      return axios(BASE_URL + `${apiList.beerPlace}?id=${placeId}&limit=45&offset=0`, {
        method:'GET',
      })
      .then(response => {
        commit('setBeerListByPlace', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_PLICE_IS_ADDED_LIST({commit},{userId,beerId}){
      return axios(BASE_URL + `${apiList.placeIsAddedList}?userId=${userId}&beerId=${beerId}`,{
        method:'GET',
      })
      .then(response => {
        commit('setPliceIsAddedList', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_USER_BREWERY_DATA({commit}, userId){
      return axios(BASE_URL + `${apiList.breweryListUser}?userId=${userId}`,{
        method:'GET',
      })
      .then(response => {
        commit('setUserBreweryData', response.data)
        // console.log(response.data);
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_ITEM_SILE({commit},placeId){
      return axios(BASE_URL + `${apiList.placeProfile}/${placeId}`, {
        method:'GET',
      })
      .then(response => {
        commit('setItemSile', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_USER_SILES({commit}, userId){
      // return axios(BASE_URL + apiList.placesList + `/user?userId=${userId}`, {
      return axios(`${BASE_URL}${apiList.placeListUser}?userId=${userId}`, {
        method:'GET',
      })
      .then(response => {
        commit('setUserSilesData', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
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
    GET_DATA_BEER({commit},{limit, offset}){
      return axios(BASE_URL + apiList.beerList.main + `?limit=${limit}&offset=${offset}`,{
        method:'GET',
      })
      .then(response => {
        commit('setBeerData', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_BEERS_BY_BREWERY({commit}, breweryId){
      return axios(BASE_URL + `${apiList.beerListBrewery}/?breweryId=${breweryId}&limit=45&offset=0`,{
        // /beer/list/brewery
        method:'GET',
      })
      .then(response => {
        commit('setBeersBrewery', response.data)
        // console.log(response.data)
        return response
      })
      .catch(error => console.log(error))
    },
    GET_DATA_BREWERYES({commit}, {limit, offset}){
      return axios(BASE_URL + apiList.breweryList.main + `?limit=${limit}&offset=${offset}`,{
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
    GET_DATA_PLACE({commit}, {limit, offset}){
      return axios(BASE_URL + apiList.placesList.main + `?limit=${limit}&offset=${offset}`,{
        method:'GET',
      })
      .then(response => {
        commit('setPlaceData', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_DATA_BREWERY_ADD_BLOCK({commit}){
      return axios(BASE_URL + apiList.breweryAddBlock, {
        method:'GET',
      })
      .then(response => {
        commit('setBreweryAddBlockData', response.data)
        return response
      })
      .catch(error => console.log(error))
    },
    GET_DATA_BEER_ADD_BLOCK({commit}){
      return axios(BASE_URL + apiList.berrAddBlock, {
        method:'GET',
      })
      .then(response => {
        commit('setBeerAddBlockData', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_DATA_PLACE_ADD_BLOCK({commit}){
      return axios(BASE_URL + apiList.placeAddBlock, {
        method:'GET',
      })
      .then(response => {
        commit('setPlaceAddBlockData', response.data)
        return response
      })
      .catch(error => {
        console.log(error);
      })
    },
    GET_DATA_FEEDBACK_LIST_MAIN({commit}){
      return axios(BASE_URL + apiList.feedbackListMain, {
        method:'GET',
      })
      .then(response => {
        commit('setFeedbackListMain', response.data)
        // console.log(response.data);
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

export const BASE_URL = 'http://109.201.96.70:8081/api'

export const apiList = {
   // USER_APIS
   userCreate: '/user/create',
   userAuth  : '/user/auth',
   userProfile : '/user/profile',
   userEdit : '/user/edit',
   userPhoto : '/user/photo',
   userPhotoRemove: '/user/photo/remove',
   userFavoritePlace:'/user/favorite/place',
   // end USER_APIS
   //-----------------------------
   // BEER_APIS
   berrAddBlock : '/beer/adblock',
   beerList  : {
      main : '/beer/list',
      queriedOptions : ['?limit=5&offset=0']
   },
   beerListBrewery:'/beer/list/brewery',
   beerPlace:'/beer/place',
   // end BEER_APIS
   // ----------------------------
   // FEEDBACK_APIS
   feedbackListMain: '/feedback/list/main',
   // end FEDBACK_APIS
   // ----------------------------
   // BREWERY_APIS
   breweryCreate: '/brewery/create',
   breweryAddBlock:'/brewery/adblock',
   breweryList: { 
      main : '/brewery/list',
      queriedOptions : ['?limit=5&offset=0']
   },
   breweryListUser:'/brewery/list/user',
   // end BREWERY_APIS
   // -----------------------------
   // PLACE_APIS
   placeAddBlock: '/place/adblock',
   placeCreate  : '/place/create',
   placeBuyBeer: '/place/buy/beer',
   placeIsAddedRemove: '/place/isAdded/remove',
   placeIsAddedList:'/place/isAdded/list',
   placesList : {
      main : '/place/list',
      queriedOptions : ['?limit=5&offset=0']
   },
   placeListUser:'/place/list/user',
   placeProfile:'/place/profile',
   // end PLACE_APIS
   // --------------------------------
   // SEARCH_APIS
   searchResult: {
      main: '/search/beer',
      queriedOptions: ['?']
   },
   // end SEARCH_APIS
}
// https://taptrack.ru/brewery/list?limit=45&offset=0
// https://taptrack.ru/place/list?limit=45&offset=0
// https://taptrack.ru/place/adblock
export const BASE_URL = 'https://taptrack.ru'

export const apiList = {
   userCreate: '/user/create',
   userAuth  : '/user/auth',
   userProfile : '/user/profile',
   userEdit : '/user/edit',
   userPhoto : '/user/photo',
   beerList  : {
      main : '/beer/list',
      queriedOptions : ['?limit=45&offset=0']
   },
   breweryList: {
      main : '/brewery/list',
      queriedOptions : ['?limit=45&offset=0']
   },
   placesList : {
      main : '/place/list',
      queriedOptions : ['?limit=45&offset=0']
   }
}
// https://taptrack.ru/brewery/list?limit=45&offset=0
// https://taptrack.ru/place/list?limit=45&offset=0
import { BASE_URL } from "./BaseUrl"

export const getData = async(url) => {
   const response = await fetch(BASE_URL + url , {
      method:"GET",
      headers:{
         'Content-Type': 'application/json',
         'Autorisation':'Barier${token}'
      }
   })
}
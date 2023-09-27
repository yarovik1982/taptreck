import { BASE_URL } from "./BaseUrl";
import { GetToken } from "./GetDataProfile";
import axios from "axios";

export const getCookie = (str) => {
   const cookie = document.cookie.split(';').some((item) => item.trim().startsWith(str));
   return !!cookie
} 

export const getAll = async () => {
   const token = GetToken()
   try{
      const response = await fetch(BASE_URL + '/user/profile', {
         headers:{
            Authorization: `Bearer ${token}`,
         }
      })
      if(response.ok){
         const user = await response.json()
         console.log(user);
         localStorage.setItem("user", JSON.stringify(user))
      }
   }catch(error){console.log(error)}

   
   
}

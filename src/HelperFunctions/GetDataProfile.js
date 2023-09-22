import axios from "axios";
import { BASE_URL } from "@/HelperFunctions/BaseUrl.js";


export const GetDataProfile = () => {
   return JSON.parse(localStorage.getItem('user')) || null
}

export const ClearDataProfile = () => {
   if(localStorage.getItem('user')){
      localStorage.removeItem('user');
   }else return
}

export const UpdateProfile = async () => {
   try{
      const response = await axios.get(BASE_URL + '/user/profile')
      if(response.status){
         const profile = response.data
         localStorage.setItem('user',JSON.stringify(profile))
         console.log(profile);
         // return profile
      }
   }catch(error){console.log(error)}
}
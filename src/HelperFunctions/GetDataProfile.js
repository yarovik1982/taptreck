import axios from "axios";
import { BASE_URL } from "@/HelperFunctions/BaseUrl.js";


export const GetDataProfile = () => {
   return JSON.parse(localStorage.getItem('user')) || null
}

export const GetToken = () => {
   return JSON.parse(localStorage.getItem('token')) || null
}
// export const ClearDataProfile = () => {
//    if(localStorage.getItem('user')){
//       localStorage.removeItem('user');
//    }else return
// }

export const ClearDataProfile = () => {
   localStorage.clear()
}

// export const UpdateProfile = async (token) => {
//    if(token){
//       try{
//          const response = await axios.get(BASE_URL + '/user/profile',{
//             headers:{
//                Authorization: `Bearer ${token}`,
//             }
//          })
//          if(response.ok){
//             const profile = await response.JSON()
//             localStorage.setItem('user',JSON.stringify(profile))
//             console.log(profile);
//             // return profile
//          }
//       }catch(error){console.log(error)}
//    }
// }
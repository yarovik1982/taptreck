export const GetDataProfile = () => {
   return JSON.parse(localStorage.getItem('user')) || null
}

export const ClearDataProfile = () => {
   if(localStorage.getItem('user')){
      localStorage.removeItem('user');
   }else return
}
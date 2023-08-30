export const getCookie = (str) => {
   const cookie = document.cookie.split(';').some((item) => item.trim().startsWith(str));
   return !!cookie
} 

// export const confirmAge = () => {
//    const confirm = document.cookie.split(';').some((item) => item.trim().startsWith('ageConfirm='));
//    return !!confirm
// }
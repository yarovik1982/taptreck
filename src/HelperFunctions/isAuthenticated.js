export const isAuthenticated = () => {
   const token = document.cookie
   return !!token
   
} 
export const removeBodyScroll = (value) => {
   const body = document.querySelector('body')
   if(!value){
      body.removeAttribute('style')
   }else{
      body.style.overflow = "hidden"
      body.style.paddingRight = "25px"
   }
}
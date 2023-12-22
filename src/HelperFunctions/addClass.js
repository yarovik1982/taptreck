export const toggleClass = (selector) => {
   const items = document.querySelectorAll(selector)
   console.log(items);
   items.forEach(item => {
      item.addEventListener('click', e => {
         item.classList.toggle('active')
      })
   })
   
}
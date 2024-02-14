const setPadding = (element) => {
   const computedStyles = window.getComputedStyle(element);
   const currentPadding = parseInt(computedStyles.padding);

   const orientationChange = () => {
      if (element && window.matchMedia("(orientation: portrait)").matches && currentPadding > 24) {
         element.style.padding = '24px';
      } else {
         return;
      }
   };

   window.addEventListener('load', orientationChange);
   window.addEventListener('orientationchange', orientationChange);
};

window.onload = () => {
   const element = document.querySelector('.element');

   setPadding(element);
};

const createElement = (tag, classCss, attrs = {}, parent = document.body) => {
   const element = document.createElement(tag);
   element.classList.add(classCss);

   for (let attr in attrs) {
      element.setAttribute(attr, attrs[attr]);
   }

   parent.appendChild(element);
};

createElement('div', 'wrapper');
<style>
   body{
      // bodyStyles
   }
   .wrapper{
      // wrapperStyles
   }
</style>
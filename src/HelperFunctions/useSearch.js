

export const getAll = () => {
   return JSON.parse(localStorage.getItem('searchData')) || {}
}

// export const renderData = (type) => {

// }
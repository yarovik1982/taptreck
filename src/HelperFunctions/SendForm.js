// import {messages} from '@/HelperFunctions/Messages'

// export const sendForm = async (data, mess) => {
//    try{
//      const response = await fetch('https://taptrack.ru/user/create', {
//        method: 'POST',
//        headers:{
//          'Content-Type': 'application/json',
//        },
//        body: JSON.stringify(data),
//      })
//        if(response.ok){
//          mess = messages.registerSuccess
//          setTimeout(() => {
//            mess = messages.empty
//          }, 5000)
//        }else {
//        mess = messages.registerError
//      }
//    }catch(error){
//       mess = messages.errorRequest
//      console.error(error);
//    }
//  }
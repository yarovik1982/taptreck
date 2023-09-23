<template>
  <form id="formLoadPhoto" 
    @submit.prevent="downloadPhoto"
    class="p-4"
  >
    <div class="form-header">
      
    </div>
    <div class="form-body">
        <p class="text-center m-0">Выбрать фото</p>
      <div class="form-rowInp d-flex justify-content-center mb-2">
       
          <label for="inpImage" class="download btn btn-warning" >
            <i class="bi bi-file-arrow-down bg-warning" 
            style="font-size:32px;color:#fff;border:0;"
          ></i>
          <!-- <div class="preview"
            v-if="!image"
            v-if="image"
            style="width:70px;height:70px;"
          >
            <img :src="image"/>
          </div> -->
          </label>
          <input type="file" 
            name="image" 
            id="inpImage" 
            @change="selectedImage" 
            style="width:.1px;height:.1px;"
          />
      </div>
      <div class="form-rowInp">
        <button type="submit" class="btn btn-warning btn-sm rounded rounded-4">
          Загрузить фото
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import {ref, watchEffect} from 'vue'
import {BASE_URL} from '@/HelperFunctions/BaseUrl'
import {GetDataProfile, UpdateProfile} from '@/HelperFunctions/GetDataProfile'
import {getCookie} from '@/HelperFunctions/isAuthenticated'
import axios from 'axios';
export default {
  name: "app-form-load-avatar",
  setup(_,{emit}) {
    const profile = GetDataProfile()
    const userId = profile?.userId ?? null
    const image = ref(null)
    // const isAuth = getCookie("token=")
    const token = (document.cookie).split(';')[1].replace('token=', '')
    // const avatar = ref(JSON.parse(localStorage.getItem('user')).image)
    // console.log(token);
    const selectedImage = (e) => {
      const file = e.target.files[0]
      image.value = file
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   image.value = e.target.result;
      // };
      // reader.readAsDataURL(file);
    }
    
    // watchEffect(()=>{
    //   localStorage.setItem('avatar', avatar.value)
    // })

    const downloadPhoto = async () => {
      const formData = new FormData()
      formData.append('image', image.value)

      try{
        const response = await axios.post(BASE_URL + `/user/photo?userId=${userId}`, formData,{
          headers:{
            Authorization: `Bearer ${token}`,
          }
        })
        if(response.status){
          console.log(response.token);
           
           
          // GetDataProfile()
          // setTimeout(() => {GetDataProfile()}, 500)
          // setTimeout(() => {location.reload()},1000)
      }
        }catch(error){console.log(error);}
    }

    const closeAvatarForm = () => {
      emit('close-avatar-form')
    }
    return{
      selectedImage,
      image,
      downloadPhoto,
      closeAvatarForm,
    }
  },

  
};
</script>
<style scoped>
.download{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview{
  width: 70px;
  height: 70px;
}
.preview img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

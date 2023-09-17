<template>
  <div>
    <vue-dadata
      class="form-control"
      :token="token"
      placeholder="Введите адрес"
      @change="onChange"
      v-model="address"
    ></vue-dadata>
  </div>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex'
import VueDadata from 'vue-dadata';

export default {
  name: 'app-dadata',
  components: {
    VueDadata
  },
  setup() {
    const store = useStore()
    const token = ref(store.state.api_key_dadata)
    const address = ref('')
    const onChange = (suggestions) => {
      console.log(suggestions);
    }
    return {
      token,
      address,
      onChange,
    };
  }
};
</script>

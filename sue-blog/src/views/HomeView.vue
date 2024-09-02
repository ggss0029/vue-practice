<template>
  <div class="home">
    home
    <p>내 이름은 {{ name }} 나이는 {{ age }} 살 이야!</p>
    <button @click="handleClick">클릭</button>
    <button @click="age++">1살 추가</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // const p = ref(null)

    const name = ref('스폰지밥')
    const age = ref(10)

    const handleClick = () => {
      name.value = '뚱이'
      age.value = '20'
    }

    return { name, age, handleClick}
  }, 
}
</script>

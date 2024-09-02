<template>
  <div class="home">
    <h1>Search</h1>
    <input type="text" v-model="search">
    <p>search - {{ search }}</p>
    <div v-for="name in matchNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    name: 'Search',
    setup() {
        const search = ref('')
        const names = ref(['스폰지밥', '뚱이', '징징이', '다람이', '집게사장', '플랭크톤', '핑핑이'])

        const matchNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        return {search, names, matchNames}
    }
}
</script>

<style>

</style>
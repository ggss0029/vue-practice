<template>
  <p>반응 속도 - {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: [ 'score' ],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250) {
            this.rank = '오오 빠름!'
        }else if(this.score < 400) {
            this.rank = '쏘쏘~'
        }else {
            this.rank = '거북이세요?'
        }
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>
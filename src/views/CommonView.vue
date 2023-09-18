<script>
import { postEventLog, getEventLog } from '../api/index';

export default {
  data() {
    return { 'name': 'value' }
  },
  methods: {
    async postData() {
      try {
          // 비즈니스 로직
          const userData = {};
          const { data } = await getEventLog('');
          // data 바운딩
      } catch (error) {
          // 에러 핸들링할 코드
          console.log(error.response);
      } finally {
          
      }
    }
  },
  created() {
    console.log('created()');

  }
};

</script>

<template>
  <div class='grid'>
    <button v-on:click='postData'>get data</button>
  </div>
</template>

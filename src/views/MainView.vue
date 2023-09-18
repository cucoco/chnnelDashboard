
<template>
  <main>
    채널 통합 대시보드 컴포넌트
  </main>
</template>

<script>

export default {
  data() {
    return { 'key': 'value' }
  },
  methods: {
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  destroyed(){
    console.log('destroyed');
  }
};
</script>

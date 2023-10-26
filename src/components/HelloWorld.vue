<template>
  <div>main</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PapagoPageHelloWorld',

  data() {
    return {
      source: 'ko',
      target: 'en',
      text: '파파고 테스트',
    };
  },

  created() {
    axios({
      method: 'post',
      url: 'https://openapi.naver.com/v1/papago/n2mt',

      data: {
        source: this.source,
        target: this.target,
        text: this.text,
      },
      header: {
        'content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Naver-Client-Id': 'S0QZyjNjOWxp302OBVpC',
        'X-Naver-Client-Secret': 'XuG1Hn0PJ6',
      },
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>main</div>
</template>

<script>
import axios from 'axios';
// import * as requestApi from '../api/requestAxios';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/v1/papago/n2mt`;

const instance = axios.create({
  headers: {
    'content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Naver-Client-Id': 'S0QZyjNjOWxp302OBVpC',
    'X-Naver-Client-Secret': 'XuG1Hn0PJ6',
  },
});

export default {
  name: 'MainPage',

  data() {
    return {
      data: {
        source: 'ko',
        target: 'en',
        text: '파파고 테스트',
      },
    };
  },

  created() {
    instance.post('https://openapi.naver.com/v1/papago/n2mt', {
      data: {
        source: this.source,
        target: this.target,
        text: this.text,
      },
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>

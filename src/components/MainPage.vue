<template>
  <div>
    <button @click="translateText">번역하기</button>
    <div v-if="translatedText">{{ translatedText }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      translatedText: '',
    };
  },
  methods: {
    async translateText() {
      try {
        const response = await axios.post('/papago/n2mt', {
          source: 'ko',
          target: 'en',
          text: '안녕하세요',
        });

        this.translatedText = response.data.message.result.translatedText;
      } catch (error) {
        console.error('Error translating text:', error);
      }
    },
  },
};
</script>

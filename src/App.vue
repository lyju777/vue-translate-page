<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import mainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    mainPage,
  },
};
</script>

<style>
@import './style/default.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

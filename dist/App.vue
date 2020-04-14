<template>
  <div id="app">
  
    <router-view/>
    
  </div>
</template>

<script>

  import firebase from 'firebase'
  import Home from './components/Home'
  import Login from './components/auth/Login'


  export default {
    name: 'App',
    data () {
      return {
        }
    },
    components: {
      Home,
      Login
    },
  };
</script>

<style type="text/css">

#app {
  position: absolute;
  height: 100vh;
  width: 100vw;
}

</style>

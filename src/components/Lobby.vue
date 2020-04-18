<template>
  <div id="lobby">
   <div class="container">
      <div class="row">
         <div id="players-list" class="col-sm-1">
            <p>Liste de joueurs:</p>
         </div>

         <div id="current-players" class="col-sm-3">

         </div>
      </div>
        
   </div>
     
     <button v-on:click="beready()" id="ready">Prêt</button>
  </div>
</template>

<script>
export default {
   name: "Lobby",
   props: ['socket', 'users'],
   methods: {
      beready() {

      },

      onClickSquare() {

      }
   }
}
</script>

<style>
   #players-list {
      position: absolute;
      top: 5%;
      background: #fff;
   }
</style>
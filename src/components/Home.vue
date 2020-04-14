<template>
	<div class="home">
		<button @click="signout()" class="btn btn-primary"> déconnexion </button>

		<grid> </grid>
	</div>

</template>

<script>
	import firebase from 'firebase'
	import io from "socket.io-client";
	import Grid from './Grid'

	export default {
		name: 'home',
		data(){
			return {
				socket: {},
			};
			
		},
		components: {
			grid: Grid,
		},
		created() {
			this.socket = io("https://monopolloi.herokuapp.com");

		},
		mounted() {
			this.socket.on("position", data => {
				
			});
        },
		methods: {
			signout : function() {
				firebase.auth().signOut().then(() => {
					this.$router.push('/login')
				})
			},
			move(direction) { 
				console.log(direction)
				this.socket.emit("move", direction); 
			},
		}
	};
</script>

<style type="text/css">

	
</style>
<template>
	<div class="home">
		<headbar> </headbar>
		<grid> </grid>
	</div>

</template>

<script>
	import firebase from 'firebase'
	import io from "socket.io-client";
	import Grid from './Grid'
	import Headbar from './Headbar'

	export default {
		name: 'home',
		data(){
			return {
				socket: {}, 
			};
			
		},
		components: {
			grid: Grid,
			headbar: Headbar
		},
		created() {
			this.socket = io("https://monopolloi.herokuapp.com");

		},
		mounted() {
			this.socket.on("position", data => {
				
			});
        },
		methods: {
			
			move(direction) { 
				console.log(direction)
				this.socket.emit("move", direction); 
			},
		}
	};
</script>

<style type="text/css">

	
</style>
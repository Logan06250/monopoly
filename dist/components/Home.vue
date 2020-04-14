<template>
	<div class="home">
		<headbar v-bind:socket="socket" v-bind:users="users"> </headbar>
		<div v-for="user in users">
			<label>
				{{ user }}
			</label>
		</div>
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
				users: []
			};
		},
		components: {
			grid: Grid,
			headbar: Headbar
		},
		created() {
			this.socket = io("https://monopolloi.herokuapp.com");
			//this.socket = io("localhost:3000");
		},
		mounted() {
			this.socket.emit("name", firebase.auth().currentUser.displayName)
			this.socket.on("users", users => this.users = users )
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
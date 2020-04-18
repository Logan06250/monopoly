<template>
	<div class="home">
		<headbar v-bind:socket="socket" v-bind:users="users"> </headbar>
		<div v-for="user in users" style="display: inline">
			<label >
				{{ user }}, 
			</label>
		</div>

		<lobby></lobby>

		<!--<grid> </grid>-->
	</div>

</template>

<script>


// Width block : 37p
// Height block : 37p

	import firebase from 'firebase'
	import io from "socket.io-client";
	import Grid from './Grid'
	import Headbar from './Headbar'
	import Lobby from './Lobby'
	import Konva from "konva"

	export default {
		name: 'home',
		data(){
			return {
				socket: {}, 
				users: [],
				context: {},
				positions: [],
				stage: [],
				circle:[] 
			};
		},
		components: {
			grid: Grid,
			headbar: Headbar,
			lobby: Lobby
		},
		created() {
			//this.socket = io("https://monopolloi.herokuapp.com");
			this.socket = io("localhost:3000");

			this.socket.on("users", users => this.users = users )
			this.socket.emit("name", firebase.auth().currentUser.displayName)

			
		},
		mounted() {
			
		
        },
		methods: {
			test1() {

				
				
			},
			test2() { 

				

			},
		}
	};
</script>

<style type="text/css">
.home {
color: white

}
#canvas {

}
/*#container {

	position: absolute;
	top: 50%;
	left: 50%;
	background: url(PLATO.png);
	background-size: cover;

	transform: translate(-50%, -50%);


}*/
#test {
	position: absolute;
	top: 5%;
}
	
</style>
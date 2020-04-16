<template>
	<div class="home">
		<headbar v-bind:socket="socket" v-bind:users="users"> </headbar>
		<div v-for="user in users" style="display: inline">
			<label >
				{{ user }}, 
			</label>
		</div>
		<div>
			<center>
				<canvas class="img-fluid" id="canvas" ref="game" width="250" height="450" style="border: 1px solid black;"></canvas>
			</center>
		</div>
		<p>
            <button v-on:click="move('right')">Right</button>
            <button v-on:click="move('left')">Left</button>
            <button v-on:click="move('up')">Up</button>
            <button v-on:click="move('down')">Down</button>
        </p>
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
				users: [],
				context: {},
				positions: []
			};
		},
		components: {
			grid: Grid,
			headbar: Headbar
		},
		created() {
			//this.socket = io("https://monopolloi.herokuapp.com");
			this.socket = io("localhost:3000");

			this.socket.on("users", users => this.users = users )
			this.socket.emit("name", firebase.auth().currentUser.displayName)

			
		},
		mounted() {
			this.context = this.$refs.game.getContext("2d");
			this.socket.on("position", data => {
				this.positions = data;

				this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
				this.context.fillStyle = "#FFFFFF";
				this.context.fillRect(0, 0, this.$refs.game.width, this.$refs.game.width);
				this.context.fillStyle = "#000000";
				this.positions.forEach(element => {
					this.context.fillRect(element.x, element.y, 20, 20);
					this.context.font = '12px serif'
					this.context.fillText(element.name, element.x, element.y - 20)
				});
				
			});
        },
		methods: {
			move(direction) { //250x 450y

				this.context.fillRect(0, 0, 100, 100);
				this.context.fillRect(200, 400, 50, 50);

				this.context.clearRect(200, 400, 50, 50);
				/*
				console.log(direction)
				this.socket.emit("move", direction); */
			},
		}
	};
</script>

<style type="text/css">
.home {
color: white

}
#canvas {
	position: absolute;
	background: url(canvas.jpg);
	height: 70vh;
	background-size: cover;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
	
</style>
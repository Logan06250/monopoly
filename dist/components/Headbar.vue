<template>
    <div id="headbar">
        <button @click="signout()" class="btn btn-primary"> déconnexion </button>
        <label> {{ users.length }}</label>
    </div>
</template>

<script>
import firebase from 'firebase'
import io from "socket.io-client";

export default {
    name: "headbar",
    props: ['socket', 'users'],
    created: {
    },
    methods: {
        signout () {
			firebase.auth().signOut().then(() => {
                this.socket.close()
				this.$router.push('/login')
			})
		},
    }
}
</script>

<style>

#headbar {
    position: relative;
    height: 30px;
    background-color: rgb(41, 0, 136);
}

</style>
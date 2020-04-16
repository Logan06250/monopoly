<template>
    <div id="headbar">
        <a class="float-left"> {{ users.length }} joueur(s) </a>
        <a @click="signout()" class="float-right" style='margin-right: 5px'> <i class="fas fa-sign-out-alt"></i> Se déconnecter</a>
        <center> Monopologs </center>
    </div>
</template>

<script>
import firebase from 'firebase'
import io from "socket.io-client";

export default {
    name: "headbar",
    props: ['socket', 'users'],
    methods: {
        signout () {
			firebase.auth().signOut().then(() => {
                this.socket.close()
				this.$router.push('/login')
			})
		}
    }
}
</script>

<style>
#headbar {
    position: fixed;
    width: 100vw;
    color: white;
    background-color: rgb(11, 4, 29);
}

</style>
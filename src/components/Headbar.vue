<template>
    <div id="headbar">
        <button @click="signout()" class="btn btn-primary"> déconnexion </button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "headbar",
    methods: {
        signout : function() {
			firebase.auth().signOut().then(() => {
				this.$router.push('/login')
			})
		},
    }
}
</script>

<style>

</style>
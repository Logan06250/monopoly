<template>
    <div class="login">
        <form class="form-login">
            <div id="user-not-found" style="display: none">
                <div class="alert alert-danger" role="alert">
                    Utilisateur inconnu !
                </div>
            </div>

            <div id="wrong-password" style="display: none">
                <div class="alert alert-danger" role="alert">
                    Mot de passe incorrect !
                </div>
            </div>

            <div class="form-group">
                <label for="email">Adresse mail</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <small id="emailInfo" class="form-text text-muted">L'email ne sera pas partagé.</small>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password">
            </div>
            <center>
                <button class="btn btn-primary" @click="login()">Se connecter</button>
                <a type="button" @click="signup()">Creer un compte</a>
            </center>
        </form>
    </div>
</template>
<script>

import firebase from 'firebase'
    export default{
        name: 'login',
        data(){
            return{

            };
        },
        methods: {
            login : function() {
                firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value , document.getElementById('password').value).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log(errorCode)
                    console.log(errorMessage)
                    
                    if(errorCode == "auth/user-not-found"){
                        $('#wrong-password').css('display', 'none')
                        $('#user-not-found').css('display', '')
                    }
                    if(errorCode == "auth/wrong-password"){
                        $('#user-not-found').css('display', 'none')
                        $('#wrong-password').css('display', '')
                    }
                }).then(() => {
					this.$router.push('/home')
				});
            },
            signup : function() {
                this.$router.push('/signup')
            }
        }
    }
</script>

<style>

.form-login {
    position: relative;
    background: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 5vh;
    margin-right: 10%;
    margin-left: 10%;
}
</style>
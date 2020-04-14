<template>
    <div class="signup">
        <form class="form-login">

            <a @click="login()"> <i class="far fa-arrow-alt-circle-left"></i> </a>
            
            <div id="email-already-in-use" style="display: none">
                <div class="alert alert-danger" role="alert">
                    Utilisateur déjà existant
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
                <button class="btn btn-primary" @click="signup()">Creer un compte</button>
            </center>
        </form>
    </div>
</template>
<script>
    import firebase from 'firebase'
    export default{
        name: 'signup',
        data(){
            return{
                next: "/home"
            };
        },
        methods: {
            login : function() {
                this.$router.push('/login')
            },
            signup : function() {
                this.next = "/home"
                firebase.auth().createUserWithEmailAndPassword(document.getElementById('email').value , document.getElementById('password').value).catch(error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    
                    console.log(errorCode)
                    console.log(errorMessage)

                    this.next = "/signup"

                    if(errorCode == "auth/email-already-in-use"){
                        $('#email-already-in-use').css('display', '')
                    }
                }).then(() => {
					this.$router.push(this.next)
				})
            }
        }
    }
</script>

<style>

</style>
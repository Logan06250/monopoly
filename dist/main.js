(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,s){var n=s(73);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(13).default)("6065fdb9",n,!0,{})},15:function(t,e,s){var n=s(75);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(13).default)("4fa8c10b",n,!0,{})},16:function(t,e,s){var n=s(79);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(13).default)("5e985c4e",n,!0,{})},17:function(t,e,s){var n=s(81);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(13).default)("03ada772",n,!0,{})},69:function(t,e){},72:function(t,e,s){"use strict";var n=s(14);s.n(n).a},73:function(t,e,s){(t.exports=s(12)(!1)).push([t.i,"\n#headbar {\r\n    position: fixed;\r\n    width: 100vw;\r\n    color: white;\r\n    background-color: rgb(11, 4, 29);\n}\r\n\r\n",""])},74:function(t,e,s){"use strict";var n=s(15);s.n(n).a},75:function(t,e,s){e=t.exports=s(12)(!1);var n=s(76)(s(77));e.push([t.i,"\n.home {\ncolor: white\n}\n#canvas {\n\tposition: absolute;\n\tbackground: url("+n+");\n\theight: 70vh;\n\tbackground-size: cover;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\t\n",""])},77:function(t,e,s){"use strict";s.r(e),e.default=s.p+"859059e8357cc265e76df5819b8b6e4b.png"},78:function(t,e,s){"use strict";var n=s(16);s.n(n).a},79:function(t,e,s){(t.exports=s(12)(!1)).push([t.i,"\n.form-login {\n    position: relative;\n    background: white;\n    padding: 10px;\n    border-radius: 10px;\n    margin-top: 5vh;\n    margin-right: 10%;\n    margin-left: 10%;\n}\n",""])},80:function(t,e,s){"use strict";var n=s(17);s.n(n).a},81:function(t,e,s){(t.exports=s(12)(!1)).push([t.i,"\n#app {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n}\n\n",""])},82:function(t,e,s){"use strict";s.r(e);var n=s(2),a=s.n(n);const i=Object(n.initializeApp)({apiKey:"AIzaSyCN8FVkY2coL1PoF0sfM_zONC2PRh5-KZ0",authDomain:"monopolloi.firebaseapp.com",databaseURL:"https://monopolloi.firebaseio.com",projectId:"monopolloi",storageBucket:"monopolloi.appspot.com",messagingSenderId:"130282149770",appId:"1:130282149770:web:168bbbce3af38045361a73",measurementId:"G-4VVNHB2TN0"});i.firestore(),i.functions();var o=s(7),r=s(23),l=s.n(r),c={},u=s(4),d=Object(u.a)(c,function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"canvas"}},[this._v("\n        Désolé, votre navigateur ne prend pas en charge <canvas>.\n    ")])])}],!1,null,null,null).exports,h={name:"headbar",props:["socket","users"],methods:{signout(){a.a.auth().signOut().then(()=>{this.socket.close(),this.$router.push("/login")})}}},p=(s(72),{name:"home",data:()=>({socket:{},users:[],context:{},positions:[]}),components:{grid:d,headbar:Object(u.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"headbar"}},[s("a",{staticClass:"float-left"},[t._v(" "+t._s(t.users.length)+" joueur(s) ")]),t._v(" "),s("a",{staticClass:"float-right",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.signout()}}},[s("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Se déconnecter")]),t._v(" "),s("center",[t._v(" Monopologs ")])],1)},[],!1,null,null,null).exports},created(){this.socket=l()("localhost:3000"),this.socket.on("users",t=>this.users=t),this.socket.emit("name",a.a.auth().currentUser.displayName)},mounted(){this.context=this.$refs.game.getContext("2d"),this.socket.on("position",t=>{this.positions=t,this.context.clearRect(0,0,this.$refs.game.width,this.$refs.game.height),this.context.fillStyle="#FFFFFF",this.context.fillRect(0,0,this.$refs.game.width,this.$refs.game.width),this.context.fillStyle="#000000",this.positions.forEach(t=>{this.context.fillRect(t.x,t.y,20,20),this.context.font="12px serif",this.context.fillText(t.name,t.x,t.y-20)})})},methods:{move(t){this.context.fillRect(0,0,100,100),this.context.fillRect(200,400,50,50),this.context.clearRect(200,400,50,50)}}}),m=(s(74),Object(u.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("headbar",{attrs:{socket:t.socket,users:t.users}}),t._v(" "),t._l(t.users,function(e){return s("div",{staticStyle:{display:"inline"}},[s("label",[t._v("\n\t\t\t\t"+t._s(e)+", \n\t\t\t")])])}),t._v(" "),s("div",[s("center",[s("canvas",{ref:"game",staticClass:"img-fluid",staticStyle:{border:"1px solid black"},attrs:{id:"canvas",width:"260",height:"450"}})])],1),t._v(" "),s("p",[s("button",{on:{click:function(e){return t.move("right")}}},[t._v("Right")]),t._v(" "),s("button",{on:{click:function(e){return t.move("left")}}},[t._v("Left")]),t._v(" "),s("button",{on:{click:function(e){return t.move("up")}}},[t._v("Up")]),t._v(" "),s("button",{on:{click:function(e){return t.move("down")}}},[t._v("Down")])])],2)},[],!1,null,null,null).exports),f={name:"login",data:()=>({}),methods:{login:function(){a.a.auth().signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).catch(function(t){var e=t.code,s=t.message;console.log(e),console.log(s),"auth/user-not-found"==e&&($("#wrong-password").css("display","none"),$("#user-not-found").css("display","")),"auth/wrong-password"==e&&($("#user-not-found").css("display","none"),$("#wrong-password").css("display",""))}).then(()=>{this.$router.push("/home")})},signup:function(){this.$router.push("/signup")}}},v=(s(78),Object(u.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("form",{staticClass:"form-login"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("center",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.login()}}},[t._v("Se connecter")]),t._v(" "),s("a",{attrs:{type:"button"},on:{click:function(e){return t.signup()}}},[t._v("Creer un compte")])])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"none"},attrs:{id:"user-not-found"}},[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[this._v("\n                Utilisateur inconnu !\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"none"},attrs:{id:"wrong-password"}},[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[this._v("\n                Mot de passe incorrect !\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[this._v("Adresse mail")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp"}}),this._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"emailInfo"}},[this._v("L'email ne sera pas partagé.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[this._v("Mot de passe")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"password"}})])}],!1,null,null,null).exports),g={name:"App",data:()=>({}),components:{Home:m,Login:v}},_=(s(80),Object(u.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,null,null,null).exports),b=s(24),y={name:"signup",data:()=>({next:"/home"}),methods:{login:function(){this.$router.push("/login")},signup:function(){this.next="/home",a.a.auth().createUserWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(function(t){return t.user.updateProfile({displayName:document.getElementById("pseudo").value})}).catch(t=>{var e=t.code,s=t.message;console.log(e),console.log(s),this.next="/signup","auth/email-already-in-use"==e&&$("#email-already-in-use").css("display",""),"auth/weak-password"==e&&$("#weak-password").css("display","")}).then(()=>{this.$router.push(this.next)})}}},w=Object(u.a)(y,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup"},[s("form",{staticClass:"form-login"},[s("a",{on:{click:function(e){return t.login()}}},[s("i",{staticClass:"far fa-arrow-alt-circle-left"})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("center",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.signup()}}},[t._v("Creer un compte")])])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"none"},attrs:{id:"email-already-in-use"}},[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[this._v("\n                Utilisateur déjà existant\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"none"},attrs:{id:"weak-password"}},[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[this._v("\n                Mot de passe trop court (6 caractères minimum)\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[this._v("Adresse mail")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp"}}),this._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"emailInfo"}},[this._v("L'email ne sera pas partagé.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[this._v("Mot de passe")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"pseudo"}},[this._v("Pseudo")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"pseudo",id:"pseudo",required:""}})])}],!1,null,null,null).exports;o.a.use(b.a);const x=new b.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"login",component:v},{path:"/signup",name:"signup",component:w},{path:"/home",name:"home",component:m,meta:{requiresAuth:!0}}]});x.beforeEach((t,e,s)=>{const a=n.auth().currentUser,i=t.matched.some(t=>t.meta.requiresAuth);i&&!a?s("login"):!i&&a?s("home"):s()});var C=x,k=s(38);o.a.config.productionTip=!1,o.a.use(k.a);let E="";n.auth().onAuthStateChanged(()=>{E||(E=new o.a({router:C,render:t=>t(_)}).$mount("#app"))})}},[[82,1,2]]]);
//# sourceMappingURL=main.js.map
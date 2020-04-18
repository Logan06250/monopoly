<template>
    <div id="Grid">
		<div id="container">
		</div>
        <p id="test">
            <button v-on:click="test1()">test1</button>
            <button id="start">test2</button>
        </p>
    </div>
</template>

<script>
const gameHeightProportion = 0.7;
const gameWidthRatio = 0.58;
const nbXCase = 7;
const nbYCase = 12; 


export default {
    props: ["nbPlayer"],
    name: "Grid",
    data(){
		return {
			socket: {}, 
			stage: [],
            gameWidth:0 ,gameHeight:0 , sqrCenter: 0,
            
		};
    },
    created() {
    }, 
    mounted(){
        this.init();
    },
    methods:{
        moveTo: function (x, y) {

        },
        init: function () {
            
            this.gameHeight = window.innerHeight * gameHeightProportion;
            this.gameWidth = this.gameHeight * gameWidthRatio;
            this.sqrCenter = this.gameHeight / (nbYCase * 2);

            this.stage = new Konva.Stage({
                container: 'container',
                width: this.gameWidth,
                height: this.gameHeight
            });
        
			var layer = new Konva.Layer();
			var hexagon = new Konva.RegularPolygon({
				x: this.stage.width() / 7 - this.sqrCenter,
				y: this.stage.height() / 12 - this.sqrCenter,
				sides: 6,
				radius: 10,
				fill: 'red',
				stroke: 'black',
				strokeWidth: 4
			});

            layer.add(hexagon);
            
			this.stage.add(layer);

			document.getElementById('start').addEventListener('click',
				() => {
                    
                    var tween = new Konva.Tween({
                        node: hexagon,
                        duration: 0.4,
                        x: hexagon.x() + this.stage.width() / 7,
                        rotation: Math.PI * 10,
                        opacity: 1,
                        scaleX: 1.3,
                        scaleY: 1.3,
                        easing: Konva.Easings.StrongEaseInOut,
                        onFinish: () => {
                            console.log("ouais")
                        }
                    });
                    tween.play();
                    /*hexagon.to({
                        x: 100,
                        y: 100,
                        duration: 2
                    })*/
				},
				false
			);
        }
    }
}
</script>

<style>

</style>
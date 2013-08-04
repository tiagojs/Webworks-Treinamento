requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
//    paths: {
//        app: '../app'
//    }
});

requirejs(["sensor","bbui","bbm.min","foto_camera"], function(sensor,bbui,bbm,foto) {
            console.log(sensor);
});
document.addEventListener("webworksready", function(e){
					var config = {};
                    console.log("webworks pronto")
						config.onscreenready = function(element, id) {
										// aqui podemos adicionar elementos no dom	
										
										console.log("screen: " , element)
										};
				config.ondomready = function(element, id, params) {
											if (id == 'home') {
													console.log("dom: " , element)
//												var tela = element.querySelector("[data-bb-type='screen']");
											} 
											if (id == "acelerometro") {
											   sensor.initSensor();
											}
											
										};
			
			bbui.bb.init(config);
			bbui.bb.pushScreen("lista-grade.html", "home");	
		},false);




var doc = document;
var tam = 50;
var sensor = {
 ball: doc.querySelector("#ball"),
 x :0,y:0,vx:0,vy:0,ax:0,ay:0,delay:10,
 vMultiplier:0.01,
   initSensor: function () {
    console.log(ball);
    if (window.DeviceMotionEvent==undefined) {
    	doc.getElementById("no").style.display="block";
    	doc.getElementById("yes").style.display="none";
    } else {
    	window.ondevicemotion = function(event) {
    		sensor.ax = event.accelerationIncludingGravity.x;
    		sensor.ay = event.accelerationIncludingGravity.y;
    	}
        setInterval(sensor.executa, sensor.delay);
    } 
  },executa: function (){
            
    		sensor.vy = sensor.vy + -(sensor.ay);
    		sensor.vx = sensor.vx + sensor.ax;
    		sensor.y = parseInt(sensor.y + sensor.vy * sensor.vMultiplier);
    		sensor.x = parseInt(sensor.x + sensor.vx * sensor.vMultiplier);
    		if (sensor.x<0) { sensor.x = 0; sensor.mudax() ; }
    		if (sensor.y<0) { sensor.y = 0; sensor.muday(); }
    		var lim_x = doc.documentElement.clientWidth-tam;
    		if (sensor.x>lim_x) { 
    		    sensor.x = lim_x; 
    		    sensor.mudax();
             
    		}
    		var lim_y = doc.documentElement.clientHeight-tam
    		if (sensor.y>lim_y) { 
                sensor.y = lim_y; 
                sensor.muday();
            }
    		ball.style.top = sensor.y + "px";
    	    ball.style.left = sensor.x + "px";
    		doc.getElementById("pos").innerHTML = "x=" + sensor.x + "<br />y=" + sensor.y;
         },
 mudax:function(){sensor.vx *= -1 / 2;},
 muday:function(){sensor.vy *= -1 / 2;}
    	
}
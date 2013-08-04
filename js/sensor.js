var sensor = {
 x :0,y:0,vx:0,vy:0,ax:0,ay:0,delay:10,
 vMultiplier:0.01,
 doc:document,
   initSensor: function () {
    console.log("chamou o sensor");
    if (window.DeviceMotionEvent==undefined) {
    	doc.getElementById("no").style.display="block";
    	doc.getElementById("yes").style.display="none";
    } else {
    	window.ondevicemotion = function(event) {
    		ax = event.accelerationIncludingGravity.x;
    		ay = event.accelerationIncludingGravity.y;
    	}
        setInterval(sensor.executa, delay);
    } 
  },executa: function (){
    		sensor.vy = sensor.vy + -(sensor.ay);
    		sensor.vx = sensor.vx + sensor.ax;
    		var ball = sensor.doc.getElementById("ball");
    		sensor.y = parseInt(sensor.y + sensor.vy * sensor.vMultiplier);
    		sensor.x = parseInt(sensor.x + sensor.vx * sensor.vMultiplier);
    		if (sensor.x<0) { sensor.x = 0; sensor.vx = 0; }
    		if (sensor.y<0) { sensor.y = 0; sensor.vy = 0; }
    		var lim_x = doc.documentElement.clientWidth-20
    		if (x>sensor.lim_x) { 
    		    x = sensor.lim_x; 
    		    vx = 0; 
    		}
    		var lim_y = sensor.doc.documentElement.clientHeight-20
    		if (sensor.y>sensor.lim_y) { 
                sensor.y = sensor.lim_y; 
                sensor.vy = 0; 
    		}
    		sensor.ball.style.top = y + "px";
    		sensor.ball.style.left = x + "px";
    		sensor.doc.getElementById("pos").innerHTML = "x=" + sensor.x + "<br />y=" + sensor.y;
         }
    	
}
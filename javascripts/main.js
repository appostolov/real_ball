var c1 = document.getElementById("can");
var c = c1.getContext('2d');

c.fillStyle = "white";
c.fillRect(0,0,c1.width,c1.height);

var balls = new Array();

var count = 0;

var r = 20;

var vel = 1;

var vel_1 = 20;

var mouseX;
var mouseY;

function initCanvas(){
	c.canvas.addEventListener('mousemove',function(event){
		mouseX = event.clientX - c.canvas.offsetLeft;
		mouseY = event.clientY - c.canvas.offsetTop;
		
		var status = document.getElementById("status");
		status.innerHTML = mouseX+" | "+mouseY;
	});
}

var acc = 0.5;
	
var fall = function(){
	
		
	balls[count] = new Object();
	balls[count].x = mouseX;
	balls[count].y = mouseY;
	
};

var g = setInterval(function(){
		
		
	for(var a = 0; a <= count; a ++){

		c.fillStyle = "#003";
		c.beginPath();
		c.arc(balls[a].x,balls[a].y,r,0,2*Math.PI);
		c.fill();
	
		vel += acc;
		balls[a].y+= vel;
		balls[a].x-=vel_1;
		
		if(balls[a].x<r){
			balls[a].x = r;
			vel_1 = -0.9*vel_1;
		}
		
		if(balls[a].x > c1.width-r){
			balls[a].x = c1.width-r;
			vel_1 = -0.9*vel_1;
		}
		
		if(balls[a].y >= c1.height-r){
			balls[a].y = c1.height-r;
			vel = -0.7*vel;
			vel_1 = 0.97*vel_1;
		}
		c.fillStyle = "#ff0";
		c.beginPath();
		c.arc(balls[a].x,balls[a].y,r,0,2*Math.PI);
		c.fill();
	}
	},17);



var c1 = document.getElementById("can");
var c = c1.getContext('2d');

var x = 50;
var y = 100;
var r = 20;

var acc = 0.5;

var vel = 1;
var vel_1 = 20;

var g = setInterval(function(){
	
	var mx=event.clientX
  	var my=event.clientY

c.fillStyle = "white";
c.fillRect(0,0,c1.width,c1.height);

c.fillStyle = "#003";
c.beginPath();
c.arc(mx,my,r,0,2*Math.PI);
c.fill();

vel += acc;
y+= vel;
x-=vel_1;

if(mx<r){
	mx = r;
	vel_1 = -0.9*vel_1;
}

if(mx > c1.width-r){
	mx = c1.width-r;
	vel_1 = -0.9*vel_1;
}

if(my >= c1.height-r){
	my = c1.height-r;
	vel = -0.7*vel;
	vel_1 = 0.97*vel_1;
}

},17);


